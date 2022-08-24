import { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useApp } from 'context';
import LayoutDefault from 'layouts/LayoutDefault';
import Filters from 'components/Filters';
import List from 'components/List';
import type { ListingProps } from './types';
import { DEFAULT_FILTERS } from './constants';

function Listing({ title, description, type }: ListingProps): JSX.Element {
  const { api } = useApp();
  const location = useLocation();

  const scrollObserverRef = useRef<HTMLDivElement>(null);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);

  const { data: genresData } = useQuery([`${type}-genres`], () => {
    return type === 'movie' ? api.getMovieGenres() : api.getTvShowGenres();
  });
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isError,
    isLoading,
    isFetchingNextPage
  } = useInfiniteQuery(
    [type, filters],
    ({ pageParam = 1 }) => {
      const endpoint = type === 'movie' ? 'getMovies' : 'getTvShows';
      return api[endpoint](
        pageParam,
        filters.genre,
        filters.userScore,
        filters.sortBy
      );
    },
    {
      getNextPageParam: (data) => {
        const nextPage = data.page + 1;
        const maxPage = data.total_pages;

        if (nextPage >= maxPage) {
          return undefined;
        }

        return nextPage;
      }
    }
  );

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;

      if (target.isIntersecting && hasNextPage) {
        fetchNextPage().then();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    return () => setFilters(DEFAULT_FILTERS);
  }, [location]);

  useEffect(() => {
    if (!scrollObserverRef.current) {
      return;
    }

    const node = scrollObserverRef.current;
    const observer = new IntersectionObserver(handleObserver);

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [handleObserver]);

  return (
    <LayoutDefault title={title} description={description}>
      <Filters
        genres={genresData}
        type={type}
        value={filters}
        setValue={setFilters}
      />
      <List
        genres={genresData}
        pages={data?.pages}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetchingNextPage}
      />
      {hasNextPage && <div ref={scrollObserverRef} />}
    </LayoutDefault>
  );
}

export default Listing;
