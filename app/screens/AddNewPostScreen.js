import React from "react";
import { Ionicons } from "@expo/vector-icons";
import AddNewPost from "../container/AddNewPost";
import Constants from "../config/settings/Constants";
import { SafeAreaView, TouchableOpacity } from "react-native";

const AddNewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};
AddNewPostScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export default AddNewPostScreen;
