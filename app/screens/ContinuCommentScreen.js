import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, Text, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ContinuCommentScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StoreCommentDetails");
        }}
      >
        <Ionicons
          name="ios-arrow-round-back"
          size={width / 8}
          style={{ marginLeft: width / 25 }}
        />
      </TouchableOpacity>
      <Text>ContinuCommentScreen</Text>
    </SafeAreaView>
  );
};

ContinuCommentScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export default ContinuCommentScreen;
