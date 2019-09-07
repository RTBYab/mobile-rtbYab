import auth from "./auth";
import post from "./post";
import profile from "./profile";
import store from "./storeReducer";
import modalMenu from "./modalMenu";
import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";

const pConfig = {
  key: "root",
  storage
};

export default persistCombineReducers(pConfig, {
  auth,
  post,
  store,
  profile,
  modalMenu
});
