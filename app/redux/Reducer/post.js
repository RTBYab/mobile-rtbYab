import {
  ADD_POST,
  GET_STORE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "../Actions/types";

const initialState = {
  post: null,
  posts: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_POST:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
      };
    case UPDATE_POST:
      return {
        ...state,
        loading: false,
        posts: [payload, ...state.posts],
      };

    case GET_STORE_POST:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case DELETE_POST:
      return {
        ...state,
        loading: false,
        posts: state.posts.filter((post) => post._id !== payload),
      };

    default:
      return state;
  }
}
