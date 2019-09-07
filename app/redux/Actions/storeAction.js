import {
  GET_STORE,
  CREATE_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  UPLOAD_STORE_IMAGE,
  UPDATE_STORE_DETAILS,
  GET_STORE_BY_OWNER_ID,
  GET_STORE_PROFILE_PHOTO
} from "./types";
import axios from "axios";
import * as FileSystem from "expo-file-system";
import Const from "../../config/settings/Constants";

export const createStore = ({
  id,
  token,
  storeData,
  navigation
}) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify(storeData);

  try {
    const res = await axios.post(
      Const.URL.Main + `store/createstore/${id}`,
      body,
      config
    );
    dispatch({
      type: CREATE_STORE,
      payload: res.data
    });
    navigation.navigate("Store");
  } catch (e) {
    console.log(e);
    alert(e);
  }
};

export const getStoreByStoreOwner = (id, token) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get(
      Const.URL.Main + `/store/storeOwner/${id}`,
      config
    );

    dispatch({
      type: GET_STORE_BY_OWNER_ID,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};

export const updateStore = ({
  id,
  token,
  storeData,
  navigation
}) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(storeData);

  try {
    const res = await axios.put(
      Const.URL.Main + `store/updatestore/${id}`,
      body,
      config
    );
    dispatch({
      type: UPDATE_STORE,
      payload: res.data
    });
    navigation.goBack();
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
};

export const updateStoreDetails = ({
  id,
  token,
  storeData,
  navigation
}) => async dispatch => {
  const config = {
    headers: {
      Accept: "application/json",
      Authorization: `bearer ${token}`,
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(storeData);
  console.log("bodyyy", body);

  try {
    const res = await axios.put(
      Const.URL.Main + `store/updatedetails/${id}`,
      body,
      config
    );
    dispatch({
      type: UPDATE_STORE_DETAILS,
      payload: res.data
    });
    navigation.goBack();
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
};

export const uploadStoreImage = ({ id, token, photo }) => async dispatch => {
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
  // bodyFormData.set(newPath, fileName);
  bodyFormData.append("photo", {
    uri: photo,
    name: fileName
  });
  try {
    // await FileSystem.moveAsync({
    //   from: photo,
    //   to: newPath
    // });
    const res = await axios.post(
      Const.URL.Main + `store/updatephoto/${id}`,
      bodyFormData,
      config
    );
    dispatch({
      type: UPDATE_STORE_DETAILS,
      payload: res.data
    });
  } catch (e) {
    console.log(e.message);
    alert(e.message);
  }
};

export const getStoreProfilePhoto = ({ id, photoId }) => async dispatch => {
  config = {
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.get(
      Const.URL.Main + `store/storeprofilePhoto/${id}/${photoId}`
    );
    dispatch({
      type: GET_STORE_PROFILE_PHOTO,
      payload: res.data
    });
  } catch (e) {
    console.log(e);
  }
};
