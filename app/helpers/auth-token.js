import axios from "axios";
// import console = require("console");

const setAuthToken = token => {
  // console.log("ttttttt", token);
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
