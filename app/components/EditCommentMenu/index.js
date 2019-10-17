import React, { useState, useEffect } from "react";
import { View, Text, Animated, Dimensions } from "react-native";

const EditCommentMenu = ({ visibility, position }) => {
  const { height, width } = Dimensions.get("window");

  return (
    <AnimatedContainer style={{ height: position }}>
      {visibility == true && <Text>EditCommentMenu</Text>}
    </AnimatedContainer>
  );
};

const AnimatedContainer = Animated.createAnimatedComponent(View);
export default EditCommentMenu;
