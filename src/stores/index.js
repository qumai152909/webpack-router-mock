import React from 'react'
import ThemeStore from './pages/theme.store';
import CounterStore from './pages/counter.store';

class RootStore {
  constructor() {
    this.themeStore = new ThemeStore();
    this.counterStore = new CounterStore();
  }
}

const rootStore = new RootStore();
const StoresContext = React.createContext(rootStore);
// this will be the function available for the app to connect to the stores
const useStores = () => React.useContext(StoresContext);

export {rootStore, StoresContext, useStores};
