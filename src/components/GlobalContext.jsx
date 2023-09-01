/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useContext, useReducer } from "react";
import reducer from "./functions/reducer";

// create context
const GlobalContext = createContext();

// initial state
export const initialState = {
  prevValue: "",
  currValue: "",
  operator: undefined,
  cumputed: false,
};

// operations
export const OPERATIONS = {
  ENTRIES: "ADD-ENTRIES",
  OPERATOR: "ADD-OPERATOR",
  DELETE: "DELETE-ENTRY",
  RESET: "RESET-CALC",
  COMPUTE: "COMPUTE-VALUES",
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch, OPERATIONS }}>
      {children}
    </GlobalContext.Provider>
  );
};

// export custom hook
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
