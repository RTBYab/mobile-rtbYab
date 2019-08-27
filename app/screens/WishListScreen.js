import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import Store from "../container/Store/Registration";

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

export default connect(null)(WishListScreen);
