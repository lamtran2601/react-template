import { createContext } from 'react';

export class AppStore {
  [key:string]: any;

  add(key: string, value: any): void {
    this[key] = value;
  }
}

export const AppContext = createContext<AppStore>(new AppStore());
