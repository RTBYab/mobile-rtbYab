import auth from "./auth";
import profile from "./profile";
import storage from "redux-persist/es/storage";
import { persistCombineReducers } from "redux-persist";

const pConfig = {
  key: "root",
  storage
};

export default persistCombineReducers(pConfig, {
  auth,
  profile
});
