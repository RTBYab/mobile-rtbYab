import axios from "axios";
import Const from "../.././config/settings/Constants";
import { GET_PROFILE, ADD_FOLLOW, UNFOLLOW } from "./types";

export const getProfileById = (id, token) => async (dispatch) => {
  const config = {
    headers: {
      Authorization: `bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(Const.URL.Main + `user/${id}`, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

// Following
export const addFollow = ({ token, userId, followId }) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ userId, followId });

  try {
    await axios.post(Const.URL.Main + "user/follow", body, config);
    dispatch({
      type: ADD_FOLLOW,
      payload: userId,
    });
  } catch (e) {
    console.log(e);
  }
};

// UnFollow
export const unFollow = ({ token, userId, unfollowId }) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ userId, unfollowId });
  console.log(body);

  try {
    await axios.post(Const.URL.Main + "user/unfollow", body, config);
    dispatch({
      type: UNFOLLOW,
      payload: userId,
    });
  } catch (e) {
    console.log(e);
  }
};
