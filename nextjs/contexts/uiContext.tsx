import { createContext, useContext, useReducer, useMemo, Reducer } from 'react';

interface IUIContext {
  miniSidenav: boolean;
  transparentSidenav: boolean;
  sidenavColor: 'info';
  transparentNavbar: boolean;
  fixedNavbar: boolean;
  openConfigurator: boolean;
  layout: 'dashboard';
}

const initialUIContext: IUIContext = {
  miniSidenav: false,
  transparentSidenav: true,
  sidenavColor: 'info',
  transparentNavbar: true,
  fixedNavbar: true,
  openConfigurator: false,
  layout: 'dashboard'
};

const UIContext = createContext<{
  state: IUIContext;
  dispatch: React.Dispatch<any>;
}>({
  state: initialUIContext,
  dispatch: () => null
});

export enum ReducerActionType {
  MINI_SIDENAV,
  LAYOUT
}
export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};
export type ReducerAction = {
  type: ReducerActionType;
  payload?: any;
};

const reducer: Reducer<IUIContext, ReducerAction> = (
  state: IUIContext,
  action: any
) => {
  switch (action.type) {
    case 'MINI_SIDENAV': {
      return { ...state, miniSidenav: action.value };
    }
    default: {
      return state;
    }
  }
};

interface IUIControllerProviderProps {
  children: JSX.Element | JSX.Element[];
}

const UIControllerProvider = ({ children }: IUIControllerProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialUIContext);

  return (
    <UIContext.Provider value={{ state, dispatch }}>
      {children}
    </UIContext.Provider>
  );
};

const useUIController = () => useContext(UIContext);

const setMiniSidenav = (dispatch: React.Dispatch<any>, value: any) =>
  dispatch({ type: ReducerActionType.MINI_SIDENAV, value });
const setLayout = (dispatch: React.Dispatch<any>, value: any) =>
  dispatch({ type: ReducerActionType.LAYOUT, value });

export { UIControllerProvider, useUIController, setMiniSidenav, setLayout };
