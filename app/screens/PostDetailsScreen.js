import React from "react";
import { Ionicons } from "@expo/vector-icons";
import PostDetail from "../container/PostDetail";
import { Text, SafeAreaView, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const PostDetailsScreen = ({ navigation }) => {
  const section = navigation.getParam("item");
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          name="ios-arrow-round-back"
          size={width / 8}
          style={{ marginLeft: width / 25 }}
        />
      </TouchableOpacity>
      <PostDetail
        body={section.body}
        title={section.title}
        photo={section.photo}
        id={section.postedBy}
        postId={section._id}
        navigation={navigation}
      />
    </SafeAreaView>
  );
};

export default PostDetailsScreen;
