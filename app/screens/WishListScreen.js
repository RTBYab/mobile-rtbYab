import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getProfileById } from "../redux/Actions/profile";
import { View, Text, TouchableOpacity, AsyncStorage } from "react-native";
import decoded from "jwt-decode";

const WishListScreen = ({ auth, profile, getProfileById, navigation }) => {
  useEffect(() => {
    const token = auth.token._55;
    const id = auth.user._id;
    getProfileById(id, token);
  }, []);

  console.log(profile);

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
  { getProfileById }
)(WishListScreen);
