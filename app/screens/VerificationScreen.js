import { connect } from "react-redux";
import React, { useState } from "react";
import Card from "../components/Card";
import AButton from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import { verfication } from "../redux/Actions/auth";
import AInputField from "../components/InputField";
import Constants from "../config/settings/Constants";

import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";

const VerificationScreen = ({ navigation, verfication }) => {
  const [code, setCode] = useState(require("../../assets/image/password.png"));
  const [codeIcon, SetCodeIcon] = useState(
    require("../../assets/image/smartphone.png")
  );

  const onFocusMobile = () => {
    SetCodeIcon(require("../../assets/gif/lock.gif"));
  };

  const mobileNumber = navigation.getParam("data");

  const handleVerification = () => {
    if (code == "") {
      Alert.alert("لطفا شماره همراه را بادقت وارد کنید");
    }
    verfication({ code, navigation, mobileNumber });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          width: 50,
          height: 50,
          zIndex: 10,
          marginTop: 35,
          backgroundColor: "#ccc",
        }}
      >
        <Ionicons
          style={{ marginLeft: 10 }}
          name="ios-arrow-round-back"
          size={Constants.icon.backIconSize}
        />
      </TouchableOpacity>
      <View style={styles.mainStyle}>
        <Card title="اپ نیکو" subTitle="بهترین کالا و خدمات در اطراف شما" />

        <AInputField
          maxLength={6}
          isRequired={true}
          source={codeIcon}
          onFocus={onFocusMobile}
          placeholder="******"
          onChangeText={(t) => setCode(t)}
          subTitle="لطفا کد دریافتی را وارد نمائید"
        />

        <AButton buttonTitle="اعتبار سنجی" onPress={handleVerification} />
      </View>
    </SafeAreaView>
  );
};

VerificationScreen.navigationOptions = {
  header: null,
};

export default connect(null, { verfication })(VerificationScreen);

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
  },
});
