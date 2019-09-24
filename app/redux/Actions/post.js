import axios from "axios";
import * as FileSystem from "expo-file-system";
import { ADD_POST, GET_STORE_POST, DELETE_POST } from "./types";
import Const from "../.././config/settings/Constants";

export const addNewPost = ({
  id,
  token,
  title,
  photo,
  caption,
  navigation
}) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "multipart/form-data"
    }
  };
  const fileName = photo.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  let bodyFormData = new FormData();
  bodyFormData.append("photo", {
    uri: photo,
    name: fileName
  });

  bodyFormData.append("title", title);
  bodyFormData.append("body", caption);

  try {
    const res = await axios.post(
      Const.URL.Main + `post/new/${id}`,
      bodyFormData,
      config
    );
    dispatch({
      type: ADD_POST,
      payload: res.data
    });
    navigation.goBack();
  } catch (e) {
    console.log(e);
  }
};

export const getPosts = id => async dispatch => {
  config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.get(Const.URL.Main + `post/${id}`);
    dispatch({
      type: GET_STORE_POST,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id, token, navigation) => async dispatch => {
  config = {
    headers: {
      accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  try {
    const res = await axios.delete(Const.URL.Main + `posts/${id}`, config);
    dispatch({
      type: DELETE_POST,
      payload: res.data
    });
    console.log(navigation, "pppppppo");
    navigation.goBack();
  } catch (e) {
    console.log(e);
  }
};
