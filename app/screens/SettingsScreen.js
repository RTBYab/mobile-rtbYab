import React from "react";
import SettingsSection from "../container/Setting_";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../config/settings/Constants";
import { SafeAreaView, TouchableOpacity } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      <SettingsSection navigation={navigation} />
    </SafeAreaView>
  );
};

SettingScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export default SettingScreen;
