import React, { createContext, useContext } from 'react';
import { CounterStore, counterStore } from './CounterStore';

export interface IStore {
  counterStore: CounterStore;
}
export const globalStore: IStore = {
  counterStore: counterStore,
};

export const StoreContext = createContext(globalStore);

export const useStore = () => {
  return useContext(StoreContext);
};

export const GlobalProvider = ({ children }: any) => {
  return (
    <StoreContext.Provider value={globalStore}>
      {children}
    </StoreContext.Provider>
  );
};
