import LayoutError from 'layouts/LayoutError';

function NotFound(): JSX.Element {
  return (
    <LayoutError
      title="Page not found"
      description="Sorry, we couldn't find the page you're looking for..."
      cta={{
        title: 'Go back home',
        route: '/'
      }}
    />
  );
}

export default NotFound;
