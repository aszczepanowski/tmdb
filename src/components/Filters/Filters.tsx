import { useMemo } from 'react';
import Container from 'components/Container';
import FilterBox from 'components/FilterBox';
import type { FiltersProps } from './types';
import { SCORE_OPTIONS, SORT_OPTIONS } from './constants';

function Filters({ genres, type, value, setValue }: FiltersProps): JSX.Element {
  const genreOptions = useMemo(() => {
    if (!genres) {
      return [];
    }

    return genres.map((o) => ({
      value: o.id.toString(),
      label: o.name
    }));
  }, [genres]);

  return (
    <div className="sticky top-0 z-10 backdrop-blur-md bg-zinc-100/90 border-b border-zinc-200 py-2 md:py-4">
      <Container>
        <div className="flex flex-wrap items-center">
          <div className="relative inline-block text-left my-2 mr-6 md:mr-8">
            <FilterBox
              name="Sort by"
              options={SORT_OPTIONS[type]}
              selected={value.sortBy}
              onChange={(o) => {
                setValue((prev) => ({
                  ...prev,
                  sortBy: o.value
                }));
              }}
            />
          </div>
          <div className="relative inline-block text-left my-2 mr-6 md:mr-8">
            <FilterBox
              name="Genre"
              options={genreOptions}
              selected={value.genre}
              onChange={(o) => {
                setValue((prev) => ({
                  ...prev,
                  genre: o.value
                }));
              }}
            />
          </div>
          <div className="relative inline-block text-left my-2">
            <FilterBox
              name="User score"
              options={SCORE_OPTIONS}
              selected={value.userScore}
              onChange={(o) => {
                setValue((prev) => ({
                  ...prev,
                  userScore: o.value
                }));
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Filters;
