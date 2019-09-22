import React from "react";
import { Ionicons } from "@expo/vector-icons";
import SettingsSection from "../container/Setting_";
import { SafeAreaView, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

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
          size={width / 8}
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
