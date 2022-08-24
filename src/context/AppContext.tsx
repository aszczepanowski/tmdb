import { createContext, useContext } from 'react';
import type { ProviderProps } from 'react';
import Api from 'api';
import type { State } from './types';

const INITIAL_STATE: State = {
  api: new Api(),
  genres: {
    movie: [],
    tv: []
  }
};

const AppContext = createContext(INITIAL_STATE);

function AppProvider({
  children,
  value
}: ProviderProps<Partial<State>>): JSX.Element {
  const initialValue = {
    ...INITIAL_STATE,
    ...value
  };

  return (
    <AppContext.Provider value={initialValue}>{children}</AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);

export default AppProvider;
