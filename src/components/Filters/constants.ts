const MOVIE_SORT_OPTIONS: Option[] = [
  {
    label: 'Popularity (desc)',
    value: 'popularity.desc'
  },
  {
    label: 'Popularity (asc)',
    value: 'popularity.asc'
  },
  {
    label: 'User votes (desc)',
    value: 'vote_count.desc'
  },
  {
    label: 'User votes (asc)',
    value: 'vote_count.asc'
  },
  {
    label: 'Release date (desc)',
    value: 'release_date.desc'
  },
  {
    label: 'Release date (asc)',
    value: 'release_date.asc'
  }
];

const TV_SORT_OPTIONS: Option[] = [
  {
    label: 'Popularity (desc)',
    value: 'popularity.desc'
  },
  {
    label: 'Popularity (asc)',
    value: 'popularity.asc'
  },
  {
    label: 'User votes (desc)',
    value: 'vote_count.desc'
  },
  {
    label: 'User votes (asc)',
    value: 'vote_count.asc'
  },
  {
    label: 'First air date (desc)',
    value: 'first_air_date.desc'
  },
  {
    label: 'First air date (asc)',
    value: 'first_air_date.asc'
  }
];

export const SORT_OPTIONS = {
  movie: MOVIE_SORT_OPTIONS,
  tv: TV_SORT_OPTIONS
};

export const SCORE_OPTIONS: Option[] = [
  {
    label: 'Positive',
    value: '10:7.5'
  },
  {
    label: 'Mixed',
    value: '7:5-5'
  },
  {
    label: 'Negative',
    value: '5:0.1'
  }
];
