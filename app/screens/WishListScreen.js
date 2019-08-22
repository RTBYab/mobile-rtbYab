import React from "react";
import { connect } from "react-redux";
import { logout } from "../redux/Actions/auth";
import Store from "../components/Store/Registration";
import { getProfileById } from "../redux/Actions/profile";
import { View, TouchableOpacity, Text } from "react-native";

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
