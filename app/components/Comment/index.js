import { TouchableOpacity, Text } from "react-native";
import Language from "../../config/settings/Language";
import { style } from "./style";
import React from "react";

const Comment = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Comment");
      }}
      style={style.commentStyle}
    >
      <Text style={style.labelStyle}>{Language.LeaveComment} </Text>
    </TouchableOpacity>
  );
};

export default Comment;
