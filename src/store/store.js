export const types = {
  CHANGE_SEARCH_VALUE: "CHANGE_SEARCH_VALUE"
};

export const initialState = {
  search_value: ""
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_VALUE:
      return { ...state, search_value: action.payload }
    default:
      return state;
  }
};