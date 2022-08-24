import { useMemo, useState } from 'react';
import ListItemInfo from './ListItemInfo';
import ListItemImage from './ListItemImage';
import ListItemScore from './ListItemScore';
import MediaModal from 'components/MediaModal';
import type { ListItemProps } from './types';

function ListItem({ data, genres }: ListItemProps): JSX.Element {
  const [showModal, setShowModal] = useState<boolean>(false);

  const genresText = useMemo(() => {
    if (genres.length === 0) {
      return '';
    }

    return genres
      .filter((item) => data.genre_ids.includes(item.id))
      .slice(0, 2)
      .map((item) => item.name)
      .join(', ');
  }, [data.genre_ids, genres]);

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
      <div
        className="relative flex items-start md:block cursor-pointer hover:-translate-y-3 transition ease-in-out"
        onClick={() => setShowModal(true)}
      >
        <ListItemImage source={data.poster_path} alt={data.title} />
        <div className="w-[calc(100%_-_5rem)] md:w-full p-4 md:px-0">
          <ListItemScore value={data.vote_average} />
          <h3 className="text-md font-semibold text-zinc-900 leading-5 truncate">
            {data.title}
          </h3>
          <ListItemInfo date={data.date} genres={genresText} />
        </div>
      </div>
      <MediaModal
        data={data}
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}

export default ListItem;
