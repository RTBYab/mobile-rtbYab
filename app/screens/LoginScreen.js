import { View, Alert, Text, StyleSheet, TouchableOpacity } from "react-native";
// import decode from "jwt-decode";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Card from "../components/Card";
import AButton from "../components/Button";
import { AsyncStorage } from "react-native";
import React, { useState, useEffect } from "react";
import AInputField from "../components/InputField";
import { login, logout, loadUser, loginByPhone } from "../redux/Actions/auth";

const LoginScreen = ({
  auth,
  navigation,
  isAuthenticated,
  loginByPhone,
  loadUser,
}) => {
  const getDataBack = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      loadUser(decodedData._id, token);
      navigation.navigate("Home");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataBack();
  }, []);

  const [mobile, setMobile] = useState("");
  const [mobileIcon, setMobileIcon] = useState(
    require("../../assets/image/smartphone.png")
  );

  const onFocusMobile = () => {
    setMobileIcon(require("../../assets/gif/mobile.gif"));
  };

  const handleLogin = () => {
    if (mobile == "") {
      Alert.alert("لطفا شماره همراه را بادقت وارد کنید");
    }
    loginByPhone(mobile, navigation);
  };

  if (isAuthenticated) {
    return navigation.navigate("Home");
  }

  return (
    <View style={styles.mainStyle}>
      <Card title="اپ نیکو" subTitle="بهترین کالا و خدمات در اطراف شما" />
      <AInputField
        // name="mobile"
        maxLength={10}
        isRequired={true}
        source={mobileIcon}
        onFocus={onFocusMobile}
        placeholder="9*********"
        onChangeText={(t) => setMobile(t)}
        subTitle="لطفا شماره همراه را بدون صفر وارد کنید"
      />

      <AButton buttonTitle=" ورود" onPress={handleLogin} />
      <TouchableOpacity
        style={{ margin: 20 }}
        onPress={() => {
          navigation.navigate("Registration");
        }}
      >
        <Text style={styles.textStyle}>هنوز ثبت نام نکرده اید؟</Text>
      </TouchableOpacity>
    </View>
  );
};

LoginScreen.prototype = {
  loginByPhone: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
});
LoginScreen.navigationOptions = {
  header: null,
};

export default connect(mapStateToProps, {
  loginByPhone,
  login,
  logout,
  loadUser,
})(LoginScreen);

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "#fff",
    fontFamily: "Main",
  },
});
