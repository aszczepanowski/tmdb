import './App.css';
import { StrictMode } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppProvider from 'context';
import Listing from 'pages/Listing';
import NotFound from 'pages/NotFound';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AppProvider value={{}}>
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<Navigate to="/movies" />} />
              <Route
                path="/movies"
                element={
                  <Listing
                    title="Movies"
                    description="Most popular movies right now"
                    type="movie"
                  />
                }
              />
              <Route
                path="/tv"
                element={
                  <Listing
                    title="TV Shows"
                    description="Most popular TV Shows right now: top series everyone’s watching"
                    type="tv"
                  />
                }
              />
            </Routes>
          </AppProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </StrictMode>
  );
}

export default App;
