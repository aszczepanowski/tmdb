import type { Genre, ListingResponse } from 'api/types';

export interface ListProps {
  /**
   * @default []
   */
  genres?: Genre[];
  /**
   * @default []
   */
  pages?: ListingResponse[];
  isError?: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  /**
   * @default EMPTY_SCREEN_TITLE
   */
  emptyTitle?: string;
  /**
   * @default EMPTY_SCREEN_DESCRIPTION
   */
  emptyDescription?: string;
}
