export interface Genre {
  id: number;
  name: string;
}

export interface Media {
  backdrop_path: string | null;
  date: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  title: string;
  vote_average: number;
  vote_count: number;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface ListingResponse {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}
