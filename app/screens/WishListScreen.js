import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Store from "../components/Store";
import { logout } from "../redux/Actions/auth";
import { connect } from "react-redux";
import { getProfileById } from "../redux/Actions/profile";

const WishListScreen = ({ navigation, logout }) => {
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
      <TouchableOpacity onPress={logout}>
        <Text>LogOut</Text>
      </TouchableOpacity>
    </View>
  );
};

WishListScreen.navigationOptions = {
  header: null
};

export default connect(
  null,
  { logout }
)(WishListScreen);
