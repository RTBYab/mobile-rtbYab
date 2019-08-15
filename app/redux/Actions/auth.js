import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_PROFILE
} from "./types";
import axios from "axios";
// import * as SecureStore from "expo-secure-store";
import setAuthToken from "../../helpers/auth-token";
import Const from "../.././config/settings/Constants";

// Load User
export const loadUser = (id, token) => async dispatch => {
  if (token) {
    setAuthToken(token);
  }

  try {
    const res = await axios.get(Const.URL.Main + `cuser/${id}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Registre User
export const register = newUser => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(newUser);
  // console.log(body);

  try {
    const res = await axios.post(Const.URL.Main + "/signup", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = (userData, navigation) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(userData);
  try {
    const res = await axios.post(Const.URL.Main + "/signin", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    navigation.navigate("Home");

    dispatch(loadUser(res.data.user._id));
  } catch (err) {
    console.log(err.message);
    alert(err.message);
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Logout
export const logout = () => dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};
