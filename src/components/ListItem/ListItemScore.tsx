import clsx from 'clsx';
import type { ListItemScoreProps } from './types';

function ListItemScore({ value }: ListItemScoreProps): JSX.Element | null {
  if (!value) {
    return null;
  }

  return (
    <div
      className={clsx(
        'absolute top-1 md:top-2 left-1 md:left-2 p-2 text-white text-xs md:text-sm font-bold leading-none rounded-sm',
        value <= 5
          ? 'bg-red-500'
          : value < 7.5
          ? 'bg-yellow-500'
          : 'bg-green-500'
      )}
    >
      <span className="sr-only">User score</span>
      {value * 10}
    </div>
  );
}

export default ListItemScore;
