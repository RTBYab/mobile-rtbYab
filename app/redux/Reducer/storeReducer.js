import { CREATE_STORE, GET_STORE_BY_OWNER_ID } from "../Actions/types";

const initialState = {
  store: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_STORE:
      return {
        ...state,
        store: payload
      };
    case GET_STORE_BY_OWNER_ID:
      return {
        ...state,
        store: payload
      };
    default:
      return state;
  }
}
