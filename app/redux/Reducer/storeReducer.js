import {
  LOGOUT,
  CREATE_STORE,
  UPDATE_STORE,
  ADD_NEW_COMMENT,
  GET_STORE_COMMENTS,
  UPLOAD_STORE_IMAGE,
  UPDATE_STORE_DETAILS,
  GET_STORE_BY_OWNER_ID
} from "../Actions/types";

const initialState = {
  store: null,
  loading: true,
  comments: []
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_STORE:
      return {
        ...state,
        loading: false,
        store: payload
      };
    case UPDATE_STORE:
    case UPLOAD_STORE_IMAGE:
    case UPDATE_STORE_DETAILS:
    case GET_STORE_BY_OWNER_ID:
      return {
        ...state,
        loading: false,
        store: payload
      };
    case GET_STORE_COMMENTS:
      return {
        ...state,
        loading: false,
        store: { ...state.store, comments: payload }
      };
    case ADD_NEW_COMMENT:
      return {
        ...state,
        loading: false,
        store: { ...state.store, comments: payload }
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        store: null
      };
    default:
      return state;
  }
}
