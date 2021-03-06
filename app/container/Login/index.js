import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "redux";
import React from "react";

const Login = () => {
  return <div />;
  /*

  import {
  Modal,
  Logo,
  Form,
  Text,
  Button,
  EmailIcon,
  Container,
  ButtonText,
  PasswordIcon
} from "./style";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Language from "../../config/settings/Language";
import Success from "../../components/Lottie/Success";
import { login } from "../../redux/Actions/auth";
import Color from "../../config/settings/color";
// import Lottie from "../../components/Lottie";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { BlurView } from "expo-blur";
import PropTypes from "prop-types";

class Register extends PureComponent {
  state = {
    email: "",
    Password: "",
    isLoading: false,
    isSuccessful: false,
    emailIcon: require("../../../assets/image/Email.png"),
    passwordIcon: require("../../../assets/image/Password.png")
  };

  dismissKeyaboard = () => {
    Keyboard.dismiss();
  };

  handleLogin = () => {
    const { email, password } = this.state;
    this.setState({ isSuccessful: true });
    console.log(email, password);
    const userData = {
      email,
      password
    };
    this.props.login(userData);
  };

  focusEmail = () => {
    this.setState({
      emailIcon: require("../../../assets/gif/Email.gif"),
      passwordIcon: require("../../../assets/image/Password.png")
    });
  };

  focusPassword = () => {
    this.setState({
      passwordIcon: require("../../../assets/gif/Password.gif"),
      emailIcon: require("../../../assets/image/Email.png")
    });
  };
  render() {
    const { emailIcon, passwordIcon, isSuccessful, isLoading } = this.state;
    return (
      <Container>
        <TouchableWithoutFeedback onPress={this.dismissKeyaboard}>
          <BlurView
            tint="light"
            intensity={50}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          />
        </TouchableWithoutFeedback>
        <Modal>
          <Logo source={require("../../../assets/image/logo.png")} />
          <Text>{Language.LoginIntro}</Text>
          <Form
            onChangeText={email => this.setState({ email })}
            selectionColor={Color.mainAppColor}
            keyboardType="email-address"
            selectTextOnFocus={true}
            selectTextOnFocus={true}
            onFocus={this.focusEmail}
            placeholder=" ایمیل"
          />
          <Form
            onChangeText={password => this.setState({ password })}
            selectionColor={Color.mainAppColor}
            onFocus={this.focusPassword}
            selectTextOnFocus={true}
            selectTextOnFocus={true}
            placeholder=" رمز عبور "
            secureTextEntry={true}
            returnKeyType="go"
          />
          <EmailIcon source={emailIcon} />
          <PasswordIcon source={passwordIcon} />
          <TouchableOpacity onPress={this.handleLogin}>
            <Button>
              <ButtonText>{Language.Login}</ButtonText>
            </Button>
          </TouchableOpacity>
        </Modal>
        {
          
        }
        <Success isActive={isSuccessful} />
      </Container>
    );
  }
}

Register.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Register);




*/
};

const mapStateToProps = state => {};

export default connect(mapStateToProps)(Login);
