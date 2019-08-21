import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  AsyncStorage
} from "react-native";
import decode from "jwt-decode";
import { connect } from "react-redux";
import { login, logout, loadUser } from "../redux/Actions/auth";

class LoginScreen extends PureComponent {
  state = {
    email: "",
    password: ""
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const { login, navigation } = this.props;
    const userData = {
      email,
      password
    };
    login(userData, navigation);
  };

  getDataBack = async () => {
    const { logout, navigation, loadUser } = this.props;
    try {
      const token = await AsyncStorage.getItem("token");
      const decodedData = decode(token);
      // console.log(token);
      const currentTime = Date.now() / 1000;
      if (decodedData.exp < currentTime) {
        logout();
        navigation.navigate("Login");
      } else {
        loadUser(decodedData._id, token);
        navigation.navigate("Home");
      }
    } catch (e) {
      console.log(e);
    }
  };

  componentWillMount() {
    this.getDataBack();
  }

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainStyle}>
        <TextInput
          onChangeText={email => this.setState({ email })}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder=" ایمیل "
        />
        <TextInput
          onChangeText={password => this.setState({ password })}
          placeholder=" رمز عبور "
        />
        <TouchableOpacity
          onPress={this.handleLogin}
          style={{ margin: 10, backgroundColor: "red", width: 120 }}
        >
          <Text style={{ textAlign: "center" }}>ورود</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ margin: 20 }}
          onPress={() => {
            navigation.navigate("Registration");
          }}
        >
          <Text>Registration</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login, logout, loadUser }
)(LoginScreen);

LoginScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
