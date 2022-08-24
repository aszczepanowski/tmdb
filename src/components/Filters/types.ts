import type { Dispatch, SetStateAction } from 'react';
import type { Genre } from 'api/types';

export interface FiltersProps {
  genres?: Genre[];
  type: MediaType;
  value: FilterState;
  setValue: Dispatch<SetStateAction<FilterState>>;
}
