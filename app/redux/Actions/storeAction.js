import { GET_STORE, CREATE_STORE, UPDATE_STORE, DELETE_STORE } from "./types";
import axios from "axios";
import Const from "../../config/settings/Constants";

export const createStore = ({
  id,
  token,
  storeData,
  locationData,
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
    navigation.navigate("Home");
  } catch (e) {
    console.log(e);
    alert(e);
  }
};
