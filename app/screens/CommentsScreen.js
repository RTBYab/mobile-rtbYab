import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const CommentsScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          name="ios-arrow-round-back"
          size={65}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Text>CommentsScreen</Text>
    </SafeAreaView>
  );
};
CommentsScreen.navigationOptions = {
  tabBarVisible: false
};

export default CommentsScreen;
