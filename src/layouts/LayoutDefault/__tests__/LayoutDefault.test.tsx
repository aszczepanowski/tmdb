import { screen, render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LayoutDefault from 'layouts/LayoutDefault';

describe('LayoutDefault component', () => {
  it('all props should be rendered correctly', async () => {
    render(
      <Router>
        <LayoutDefault title="Test title" description="Testing purposes">
          <p>Children should be visible</p>
        </LayoutDefault>
      </Router>
    );

    expect(await screen.findByText('Test title')).toBeInTheDocument();
    expect(await screen.findByText('Testing purposes')).toBeInTheDocument();
    expect(
      await screen.findByText('Children should be visible')
    ).toBeInTheDocument();
  });
});
