import type { Media, Genre } from 'api/types';

export interface ListItemProps {
  data: Media;
  genres: Genre[];
}

export interface ListItemDetailsProps {
  date: string;
  genres: string;
}

export interface ListItemImageProps {
  source: string | null;
  alt: string;
}

export interface ListItemScoreProps {
  value: number;
}
