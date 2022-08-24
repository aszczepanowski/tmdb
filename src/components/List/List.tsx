import Container from 'components/Container';
import InfoScreen from 'components/InfoScreen';
import ListItem from 'components/ListItem';
import ListItemPlaceholder from 'components/ListItemPlaceholder';
import ListSpinner from './ListSpinner';
import type { ListProps } from './types';
import { EMPTY_SCREEN_DESCRIPTION, EMPTY_SCREEN_TITLE } from './constants';

function List({
  genres = [],
  pages = [],
  isError,
  isLoading,
  isFetching,
  emptyTitle = EMPTY_SCREEN_TITLE,
  emptyDescription = EMPTY_SCREEN_DESCRIPTION
}: ListProps): JSX.Element {
  const renderList = () => {
    if (isLoading) {
      const placeholderArr = Array.from(Array(10).keys());

      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-8">
          {placeholderArr.map((i) => (
            <ListItemPlaceholder key={i} />
          ))}
        </div>
      );
    }

    if (isError) {
      return (
        <InfoScreen
          bg="light"
          title="Server error"
          description="There was an error while loading pages, please try again later"
        />
      );
    }

    if (pages.length === 0 || pages[0].results.length === 0) {
      return (
        <InfoScreen
          bg="light"
          title={emptyTitle}
          description={emptyDescription}
        />
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-6 sm:gap-y-8 gap-x-8">
        {pages.map((page) =>
          page.results.map((item) => {
            return <ListItem key={item.id} data={item} genres={genres} />;
          })
        )}
      </div>
    );
  };

  return (
    <section className="bg-zinc-100 pt-6 sm:pt-8 md:pt-12 pb-24">
      <Container>
        <h2 className="sr-only">List</h2>
        {renderList()}
        {isFetching && <ListSpinner />}
      </Container>
    </section>
  );
}

export default List;
