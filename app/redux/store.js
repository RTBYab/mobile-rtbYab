import thunk from "redux-thunk";
// import logger from "redux-logger";
import rootReducer from "./Reducer";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
