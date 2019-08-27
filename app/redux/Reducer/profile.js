import { GET_PROFILE, LOGOUT } from "../Actions/types";

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
