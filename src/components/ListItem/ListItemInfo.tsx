import type { ListItemDetailsProps } from './types';
import { formatDate } from 'utils';

function ListItemInfo({ date, genres }: ListItemDetailsProps): JSX.Element {
  return (
    <dl className="md:flex text-zinc-400 text-xs font-medium mt-1">
      <div>
        <dt className="sr-only">Release date</dt>
        <dd>{formatDate(date)}</dd>
      </div>
      {genres && (
        <div className="md:w-[calc(100%_-_3rem)]">
          <dt className="sr-only">Genres</dt>
          <dd className="md:w-full md:truncate">
            <svg
              className="hidden md:inline-block relative -top-[1px] mx-2 text-zinc-300"
              width="2"
              height="2"
              fill="currentColor"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            {genres}
          </dd>
        </div>
      )}
    </dl>
  );
}

export default ListItemInfo;
