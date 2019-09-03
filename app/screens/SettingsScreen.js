import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsSection from "../container/Setting_";
import Constants from "../config/settings/Constants";
import { SafeAreaView, TouchableOpacity, View } from "react-native";

const SettingScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          name="ios-arrow-round-back"
          style={{ marginLeft: 15 }}
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
