import axios from "axios";
import * as FileSystem from "expo-file-system";
import Const from "../.././config/settings/Constants";
import { ADD_POST, GET_STORE_POST, DELETE_POST, UPDATE_POST } from "./types";

export const addNewPost = ({
  id,
  token,
  title,
  photo,
  caption,
  navigation,
}) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const fileName = photo.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  let bodyFormData = new FormData();
  bodyFormData.append("photo", {
    uri: photo,
    name: fileName,
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
      payload: res.data,
    });
    navigation.goBack();
  } catch (e) {
    alert(e.message);
  }
};

export const updatePost = ({
  postId,
  token,
  title,
  photo,
  caption,
  navigation,
}) => async (dispatch) => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const fileName = photo.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  let bodyFormData = new FormData();
  bodyFormData.append("photo", {
    uri: photo,
    name: fileName,
  });

  bodyFormData.append("title", title);
  bodyFormData.append("body", caption);

  try {
    const res = await axios.put(
      Const.URL.Main + `post/${postId}`,
      bodyFormData,
      config
    );
    dispatch({
      type: UPDATE_POST,
      payload: res.data,
    });
    navigation.goBack();
  } catch (e) {
    console.log(e.message);
  }
};

export const getPosts = (id) => async (dispatch) => {
  config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(Const.URL.Main + `posts/${id}`);
    dispatch({
      type: GET_STORE_POST,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
  }
};

export const deletePost = (id, token, navigation) => async (dispatch) => {
  config = {
    headers: {
      accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json",
    },
  };
  try {
    await axios.delete(Const.URL.Main + `posts/${id}`, config);
    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    navigation.goBack();
  } catch (e) {
    console.log(e);
  }
};
