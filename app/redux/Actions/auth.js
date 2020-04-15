import {
  PURGE,
  LOGOUT,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  CLEAR_PROFILE,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
} from "./types";
import axios from "axios";
// import * as SecureStore from "expo-secure-store";
import setAuthToken from "../../helpers/auth-token";
import Const from "../.././config/settings/Constants";
import { Alert } from "react-native";

// Load User
export const loadUser = (id) => async (dispatch) => {
  if (token) {
    setAuthToken(token);
  }

  try {
    const res = await axios.get(Const.URL.Main + `cuser/${id}`);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Registre User
export const register = (newUser) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(newUser);

  try {
    const res = await axios.post(Const.URL.Main + "/signup", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    console.log(err.message);
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (userData, navigation) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(userData);
  try {
    const res = await axios.post(Const.URL.Main + "/signin", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    navigation.navigate("Home");
    const { token, user } = res.data;

    dispatch(loadUser(user._id, token));
  } catch (err) {
    console.log(err.message);
    alert(err.message);
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Login by Phone Number
export const loginByPhone = (mobile, navigation) => async (dispatch) => {
  const config = {
    headers: {
      accept: "appication/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ mobile });

  try {
    const res = await axios.post(
      "http://localhost:8080/api/mobile/signin",
      body,
      config
    );

    navigation.navigate("Verification", { data: mobile });
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Verification
export const verfication = ({ code, navigation, mobileNumber }) => async (
  dispatch
) => {
  const config = {
    headers: {
      accept: "appication/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ code, mobileNumber });

  try {
    const res = await axios.post(
      "http://localhost:8080/api/mobile/verification/",
      body,
      config
    );
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    const { user } = res.data;
    dispatch(loadUser(user._id));
    navigation.push("Home");
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
  dispatch({ type: PURGE, key: "root" });
};
