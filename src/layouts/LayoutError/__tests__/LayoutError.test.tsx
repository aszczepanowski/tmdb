import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutError from 'layouts/LayoutError';

describe('LayoutError component', () => {
  it('props should be visible (without CTA)', async () => {
    render(
      <Router>
        <LayoutError title="Test title" description="Testing purposes" />
      </Router>
    );

    const title = await screen.findByText('Test title');
    const description = await screen.findByText('Testing purposes');

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('props should be visible (with CTA)', async () => {
    render(
      <Router>
        <LayoutError
          title="Test title"
          description="Testing purposes"
          cta={{
            route: '/test-page',
            title: 'Test link'
          }}
        />
      </Router>
    );

    const link = await screen.findByText('Test link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test-page');
  });
});
