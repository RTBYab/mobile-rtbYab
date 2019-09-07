import axios from "axios";
import { ADD_POST } from "./types";
import * as FileSystem from "expo-file-system";
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
  console.log("nnnn", navigation);

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
