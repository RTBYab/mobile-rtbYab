import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../config/settings/Constants";
import React from "react";

const AddNewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          style={{ marginLeft: 10 }}
          name="ios-arrow-round-back"
          size={Constants.icon.backIconSize}
        />
      </TouchableOpacity>
      <Text>AddNewPostScreen</Text>
    </SafeAreaView>
  );
};
AddNewPostScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export default AddNewPostScreen;
