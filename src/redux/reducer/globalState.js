import { SET_LOADER } from "../types";

// init state
const initState = {
  isLoader: false,
};

export default reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return {
        ...state,
        isLoader: action.payload,
      };

    default:
      return state;
  }
};
