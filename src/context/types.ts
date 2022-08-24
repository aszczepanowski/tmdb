import Api from 'api';
import type { Genre } from 'api/types';

export interface State {
  api: Api;
  genres: {
    movie: Genre[];
    tv: Genre[];
  };
}
