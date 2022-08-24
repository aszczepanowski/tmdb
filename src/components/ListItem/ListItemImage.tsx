import { CameraIcon } from '@heroicons/react/outline';
import type { ListItemImageProps } from './types';
import { getImageUrl } from 'utils';

function ListItemImage({ source, alt }: ListItemImageProps): JSX.Element {
  return (
    <figure className="relative shrink-0 w-20 md:w-full aspect-[33/49.5] bg-zinc-200 rounded overflow-hidden">
      <CameraIcon className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 text-black/10" />
      {source && (
        <picture>
          <source
            srcSet={getImageUrl(source, 400)}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={getImageUrl(source, 500)}
            media="(min-width: 768px)"
          />
          <img
            className="relative block w-full h-full object-cover"
            src={getImageUrl(source, 200)}
            alt={alt}
            loading="lazy"
          />
        </picture>
      )}
    </figure>
  );
}

export default ListItemImage;
