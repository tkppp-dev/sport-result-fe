import { createContext } from "react";

const GlobalContext = createContext({})
const SetGlobalContext = createContext(() => {})

const INITIAL_GLOBAL_CONTEXT = {
  currentPage: 'kbo',
}

export { GlobalContext, SetGlobalContext, INITIAL_GLOBAL_CONTEXT }