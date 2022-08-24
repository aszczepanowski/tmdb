import { formatDate, getImageUrl } from 'utils';

describe('formatDate', () => {
  it('format valid date', () => {
    expect(formatDate('2022-01-01')).toBe('2022');
    expect(formatDate('2020-01-01')).toBe('2020');
  });

  it('format invalid date', () => {
    expect(formatDate('01.01.2022')).toBe('No date');
    expect(formatDate('')).toBe('No date');
  });
});

describe('getImageUrl', () => {
  const host = process.env.REACT_APP_IMG_HOST;

  it('get image with default width', () => {
    expect(getImageUrl('/test.jpg')).toBe(`${host}/w500/test.jpg`);
  });

  it('get image with custom width', () => {
    expect(getImageUrl('/test-2.jpg', 250)).toBe(`${host}/w250/test-2.jpg`);
  });
});
