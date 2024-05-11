import { createContext } from "react";
import { User } from "../util/types";

export type AppStateType = {
  language: "en" | "ge";
  menuOpen: boolean;
  layout: `grid` | `list`;
  user: User | null;
  setLanguage: (lang: "en" | "ge") => void;
  setMenuOpen: (_open: boolean) => void;
  setLayout: (_layout: `grid` | `list`) => void;
  setUser: (_user: any) => void;
};

const storageUser = localStorage.getItem(`user`);
const storageLang = localStorage.getItem(`language`) as `en` | `ge`;
export const initialAppState: AppStateType = {
  language: storageLang ?? `en`,
  menuOpen: false,
  layout: `list`,
  user: null || (storageUser && JSON.parse(storageUser)),
  setLanguage: (_lang: "en" | "ge") => undefined,
  setMenuOpen: (_open) => undefined,
  setLayout: (_layout: `grid` | `list`) => undefined,
  setUser: (_user: any) => undefined,
};

type AuthAction = {
  type: string;
  payload?: any;
};

export const AppContextActions = {
  SET_LANGUAGE: `SET_LANGUAGE`,
  SET_MENU_OPEN: `SET_MENU_OPEN`,
  SET_LAYOUT: `SET_LAYOUT`,
  SET_USER: `SET_USER`,
};

export const appContextReducer = (
  prev: AppStateType,
  action: AuthAction
): AppStateType => {
  switch (action.type) {
    case AppContextActions.SET_LANGUAGE:
      return {
        ...prev,
        language: action.payload,
      };
    case AppContextActions.SET_MENU_OPEN:
      return {
        ...prev,
        menuOpen: action.payload,
      };
    case AppContextActions.SET_LAYOUT:
      return {
        ...prev,
        layout: action.payload,
      };
    case AppContextActions.SET_USER:
      return {
        ...prev,
        user: action.payload,
      };
    default:
      return prev;
  }
};

export const AppContext = createContext<AppStateType>(initialAppState);
