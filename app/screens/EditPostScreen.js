import React from "react";
import EditPost from "../container/EditPost";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const EditPostScreen = ({ navigation }) => {
  const { body, title, photo, postedBy, id } = navigation.getParam("data");
  console.log(postedBy, photo, "bodyyyyy");
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
          size={width / 8}
        />
      </TouchableOpacity>
      <EditPost
        id={id}
        mitle={title}
        body={body}
        pageTitle="ویرایش"
        postedBy={postedBy}
        image={photo}
      />
    </SafeAreaView>
  );
};
EditPostScreen.navigationOptions = {
  tabBarVisible: false
};

export default EditPostScreen;
