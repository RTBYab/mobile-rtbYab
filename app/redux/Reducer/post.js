import { ADD_POST } from "../Actions/types";

const initialState = {
  post: [],
  loading: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        loading: false,
        post: payload
      };
    default:
      return state;
  }
}
