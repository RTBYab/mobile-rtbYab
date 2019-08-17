import { CREATE_STORE } from "../Actions/types";

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
    default:
      return state;
  }
}
