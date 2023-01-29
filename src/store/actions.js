import { types } from "./store";

export const changeSearchValue = (value) => ({
  type: types.CHANGE_SEARCH_VALUE,
  payload: value
});