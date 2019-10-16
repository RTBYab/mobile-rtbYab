import React from "react";
import { Ionicons } from "@expo/vector-icons";
import GetComments from "../container/GetComments";
import Constants from "../config/settings/Constants";
import { SafeAreaView, TouchableOpacity, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

const StoreCommentDetails = ({ navigation }) => {
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
      <GetComments />
    </SafeAreaView>
  );
};
StoreCommentDetails.navigationOptions = {
  tabBarVisible: false
};

export default StoreCommentDetails;
