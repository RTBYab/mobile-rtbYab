import React from "react";
import { View, Keyboard, TouchableWithoutFeedback } from "react-native";

const DismissableKeyboard = ({ props, ...rest }) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss}
      accessible={false}
    ></TouchableWithoutFeedback>
  );
};

export default DismissableKeyboard;
