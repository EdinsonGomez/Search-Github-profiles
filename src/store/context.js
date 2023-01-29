import { createContext } from "react";
import { initialState } from "./store";

export default createContext({
  state: initialState,
  dispatch: () => undefined
});