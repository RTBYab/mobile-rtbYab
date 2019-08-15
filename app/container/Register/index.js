import {
  Modal,
  Logo,
  Form,
  // Text,
  // Button,
  EmailIcon,
  Container,
  ButtonText,
  PasswordIcon
} from "./style";
import {
  TouchableWithoutFeedback,
  SafeAreaView,
  TouchableOpacity,
  Keyboard,
  Text,
  View,
  TextInput
} from "react-native";
import Language from "../../config/settings/Language";
import Success from "../../components/Lottie/Success";
import { register } from "../../redux/Actions/auth";
import { Card, Input, Button } from "galio-framework";
import Color from "../../config/settings/color";
// import Lottie from "../../components/Lottie";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BlurView } from "expo-blur";
import axios from "axios";

class Register extends PureComponent<Props> {
  state = {
    name: "",
    email: "",
    password: "",
    password2: ""
  };

  hanndleRegister = () => {
    const { email, password, password2, name } = this.state;
    const { register } = this.props;
    const newUser = {
      name,
      email,
      password,
      password2
    };
    console.log(newUser);
    register(newUser);
  };

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Input
          style={{
            width: 330
          }}
        />
        <Input
          style={{
            width: 330
          }}
        />
        <Input
          style={{
            width: 330
          }}
        />

        <Button
          opacity={0.6}
          onPress={() => {
            this.hanndleRegister();
          }}
        >
          <Text style={{ fontFamily: "Main2", color: "#fff", fontSize: 20 }}>
            ثبت نام
          </Text>
        </Button>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Search");
          }}
        >
          <Text>وارد شوید</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

// Register.propTypes = {
//   login: PropTypes.func.isRequired,
//   isAuthenticated: PropTypes.bool
// };
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(Register);
