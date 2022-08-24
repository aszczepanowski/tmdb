type MediaType = 'movie' | 'tv';

interface Option {
  label: string;
  value: string;
}

interface FilterState {
  genre: string;
  userScore: string;
  sortBy: string;
}
