import {
  LOGOUT,
  CREATE_STORE,
  LIKE_COMMENT,
  DELETE_COMMENT,
  UNLIKE_COMMENT,
  UPDATE_LIKES,
  EDIT_COMMENT,
  UPDATE_STORE,
  ADD_NEW_COMMENT,
  GET_STORE_COMMENTS,
  UPLOAD_STORE_IMAGE,
  UPDATE_STORE_DETAILS,
  GET_STORE_BY_OWNER_ID,
} from "../Actions/types";

const initialState = {
  store: null,
  loading: true,
  comments: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_STORE:
      return {
        ...state,
        loading: false,
        store: payload,
      };
    case UPDATE_STORE:
      return {
        ...state,
        loading: false,
        store: payload,
      };

    case UPLOAD_STORE_IMAGE:
      return {
        ...state,
        loading: false,
        store: payload,
      };
    case UPDATE_STORE_DETAILS:
      return {
        ...state,
        loading: false,
        store: payload,
      };
    case GET_STORE_BY_OWNER_ID:
      return {
        ...state,
        loading: false,
        store: payload,
      };
    case GET_STORE_COMMENTS:
      console.log("polooo", payload);
      return {
        ...state,
        loading: false,
        store: { comments: payload, ...state.store },
      };

    case ADD_NEW_COMMENT:
      return {
        ...state,
        loading: false,
        store: { ...state.store, comments: payload },
      };

    case EDIT_COMMENT:
      return {
        ...state,
        loading: false,
        store: { comments: payload, ...state.store },
      };

    case LIKE_COMMENT:
      return {
        ...state,
        loading: false,
        store: payload,
      };

    case UNLIKE_COMMENT:
      console
        .log
        // "Maaap",
        // state.store.comments
        //   .map((comment) => comment._id === payload.commentId)
        //   .indexOf().filter(i)
        // "payload",
        // state.store.comments.filter((i) => i.likedBy !== payload.commentId)
        ();

      return {
        ...state,
        loading: false,
        store: {
          ...state.store,
          store: state.store.comments
            .map((comment) => comment._id === payload.commentId)
            .indexOf()
            .filter((i) => come),

          // store: state.store.comments.filter(
          //   (i) => i.likedBy !== payload.commentId
          // ),
        },
      };
    // case UPDATE_LIKES:
    //   console.log(
    //     "maaaaap",
    //     state.store.comments.map((comment) => comment),
    //     // payload.userId,
    //     "payloadddd",
    //     payload
    //   );
    //   return {
    //     ...state,
    //     store: state.store.comments.map((post) =>
    //       post._id === payload.id ? { ...post, likes: payload.likes } : post
    //     ),
    //     loading: false,
    //   };

    case DELETE_COMMENT:
      return {
        ...state,
        loading: false,
        store: {
          ...state.store,
          comments: state.store.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
      };

    case LOGOUT:
      return {
        ...state,
        loading: false,
        store: null,
      };
    default:
      return state;
  }
}
