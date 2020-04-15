import React from "react";
import { Ionicons } from "@expo/vector-icons";
import EditComment from "../container/EditComment";
import { SafeAreaView, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const EditCommentScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("StoreCommentDetails");
        }}
      >
        <Ionicons
          size={width / 8}
          style={{ marginLeft: width / 25 }}
          name="ios-arrow-round-back"
        />
      </TouchableOpacity>
      <EditComment navigation={navigation} />
    </SafeAreaView>
  );
};

export default EditCommentScreen;

EditCommentScreen.navigationOptions = {
  tabBarVisible: false
};
