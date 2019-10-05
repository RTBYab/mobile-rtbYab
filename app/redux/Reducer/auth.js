import {
  PURGE,
  LOGOUT,
  UNFOLLOW,
  LOGIN_FAIL,
  AUTH_ERROR,
  ADD_FOLLOW,
  USER_LOADED,
  REGISTER_FAIL,
  CLEAR_PROFILE,
  LOGIN_SUCCESS,
  ACCOUNT_DELETED,
  REGISTER_SUCCESS
} from "../Actions/types";
// import * as SecureStore from "expo-secure-store";
import { AsyncStorage } from "react-native";

const initialState = {
  token: AsyncStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      AsyncStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case CLEAR_PROFILE:
    case ACCOUNT_DELETED:
    case PURGE:
      AsyncStorage.removeItem("token");
      return {
        ...state,
        user: null,
        loading: false,
        isAuthenticated: null
      };
    case ADD_FOLLOW:
      //Concat
      return {
        ...state,
        loading: false,
        profile: state.user.following.push(payload)
      };
    case UNFOLLOW:
      //Filter
      return {
        ...state,
        loading: false,
        profile: state.user.following.pop(payload)
      };

    default:
      return state;
  }
}
