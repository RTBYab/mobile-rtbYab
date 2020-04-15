import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Comment from "../container/Comment";
import Constants from "../config/settings/Constants";
import { SafeAreaView, TouchableOpacity } from "react-native";

const CommentsScreen = ({ navigation }) => {
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
      <Comment navigation={navigation} />
    </SafeAreaView>
  );
};
CommentsScreen.navigationOptions = {
  tabBarVisible: false,
};

export default CommentsScreen;
