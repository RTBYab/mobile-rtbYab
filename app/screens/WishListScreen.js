import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfileById } from "../redux/Actions/profile";
import { logout } from "../redux/Actions/auth";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";

const WishListScreen = ({
  auth,
  profile,
  getProfileById,
  navigation,
  logout
}) => {
  useEffect(() => {
    const token = auth.token;
    const id = auth.user._id;
    // console.log("bibibibi2", id, token);

    getProfileById(id, token);
  }, []);

  // console.log(profile);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Text>{auth.user.name}</Text>
      <Text>{profile.referalcode}</Text>
      {console.log(profile.referalcode)}
      <TouchableOpacity onPress={logout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

WishListScreen.navigationOptions = {
  header: null
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getProfileById, logout }
)(WishListScreen);
