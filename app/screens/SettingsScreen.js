import React from "react";
import Settings from "../container/Setting_";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../config/settings/Constants";
import { SafeAreaView, TouchableOpacity } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          style={{ marginLeft: 15 }}
          name="ios-arrow-round-back"
          size={Constants.icon.backIconSize}
        />
      </TouchableOpacity>
      <Settings />
    </SafeAreaView>
  );
};

export default SettingScreen;

SettingScreen.navigationOptions = {
  header: null
};
