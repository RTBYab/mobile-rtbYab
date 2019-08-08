import React from "react";
import { View, Text } from "react-native";
import Register from "../container/Register";

const WishListScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white"
      }}
    >
      <Register />
    </View>
  );
};

WishListScreen.navigationOptions = {
  header: null
};
export default WishListScreen;
