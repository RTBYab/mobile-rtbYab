import {
  GET_STORE,
  CREATE_STORE,
  UPDATE_STORE,
  DELETE_STORE,
  GET_STORE_BY_OWNER_ID
} from "./types";
import axios from "axios";
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

  console.log("booodyy", body);

  try {
    const res = await axios.post(
      Const.URL.Main + `store/createstore/${id}`,
      body,
      // locationData,
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
  console.log(id, token, "ssssssuuu");
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
