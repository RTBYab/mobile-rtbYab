// import console = require("console");
import { connect } from "react-redux";
import { AsyncStorage } from "react-native";

const tokenizer = () => {
  const token = AsyncStorage.getItem("token");
  console.log(token);
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(tokenizer);
