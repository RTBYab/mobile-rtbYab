import axios from "axios";
import { GET_PROFILE } from "./types";
import Const from "../.././config/settings/Constants";
// import console = require("console");

export const getProfileById = (id, token) => async dispatch => {
  // console.log("rrrrtttttt", token, id);
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.get(Const.URL.Main + `/user/${id}`, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};
