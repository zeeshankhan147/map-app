import { SET_LOADER } from "./../types";

export const setLoader = (data) => ({
  type: SET_LOADER,
  payload: data,
});
