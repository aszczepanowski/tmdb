export function getImageUrl(source: string, width = 500): string {
  const host = process.env.REACT_APP_IMG_HOST;
  return `${host}/w${width}${source}`;
}

export function formatDate(isoDate: string): string {
  if (!isoDate) {
    return 'No date';
  }

  const [year] = isoDate.split('-');
  return year.length === 4 ? year : 'No date';
}
