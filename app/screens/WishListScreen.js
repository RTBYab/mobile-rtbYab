import React from "react";
import { View } from "react-native";
import Store from "../components/Store";
import { logout } from "../redux/Actions/auth";
import { getProfileById } from "../redux/Actions/profile";
const WishListScreen = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Store navigation={navigation} />
    </View>
  );
};

WishListScreen.navigationOptions = {
  header: null
};

export default WishListScreen;
