import React from "react";
import Card from "../components/Card";
import AButton from "../components/Button";
import { Ionicons } from "@expo/vector-icons";
import AInputField from "../components/InputField";
import Constants from "../config/settings/Constants";
import { View, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";

const RegistrationScreen = ({ navigation }) => {
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
          placeholder="9*********"
          maxLength={10}
          subTitle="لطفا شماره همراه را بدون صفر وارد کنید"
          source={require("../../assets/image/smartphone.png")}
        />

        <AButton buttonTitle="ثبت نام" />
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreen;

RegistrationScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    marginTop: -30,
    justifyContent: "center",
    alignItems: "center",
  },
});
