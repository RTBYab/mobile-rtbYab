import { ADD_POST, GET_STORE_POST } from "../Actions/types";

const initialState = {
  post: [],
  loading: null,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
    case GET_STORE_POST:
      return {
        ...state,
        loading: false,
        post: payload
      };
    // case GET_STORE_POST:
    //   return {
    //     ...state,
    //     loading: false,
    //     post: payload
    //   };
    default:
      return state;
  }
}
