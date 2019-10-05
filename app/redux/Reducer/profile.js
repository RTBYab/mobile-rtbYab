import { GET_PROFILE, LOGOUT, ADD_FOLLOW, UNFOLLOW } from "../Actions/types";

const initialState = {
  profile: null,
  loading: true,
  profiles: [],
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        profile: payload
      };
    // case ADD_FOLLOW:
    //   console.log("popopo", state.following.filter(user => user._id));
    //   return {
    //     ...state,
    //     loading: false,
    //     profile: payload
    //   };
    // case UNFOLLOW:
    //   console.log("popopo", state.following.filter(user => user._id));
    //   return {
    //     ...state,
    //     loading: false,
    //     profile: payload
    //   };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        profile: null,
        profiles: []
      };
    default:
      return state;
  }
}
