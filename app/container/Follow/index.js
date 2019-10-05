import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import React, { useState } from "react";
import Colors from "../../config/settings/color";
import Constants from "../../config/settings/Constants";
import { addFollow, unFollow } from "../../redux/Actions/profile";

const { width, height } = Dimensions.get("window");

const Follow = ({ auth, addFollow, unFollow, store }) => {
  const [following, setFollowing] = useState(false);
  const token = auth.token;
  const userId = auth.user._id;
  const followId = store.store.storeOwner;
  const unfollowId = store.store.storeOwner;

  const followClick = () => {
    setFollowing(true);
    addFollow({ token, userId, followId });
  };

  unfollowClick = () => {
    setFollowing(false);
    unFollow({ token, userId, unfollowId });
  };

  const followButton = auth.user.following.find(
    id => id == store.store.storeOwner
  ) ? (
    <View style={styles.followButtom}>
      <TouchableOpacity onPress={unfollowClick}>
        <Text style={styles.text}>لغو دنبال کردن</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.followButtom}>
      <TouchableOpacity onPress={followClick}>
        <Text style={styles.text}>دنبال کردن</Text>
      </TouchableOpacity>
    </View>
  );

  return <View>{followButton}</View>;
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

const styles = StyleSheet.create({
  followButtom: {
    width: width / 3.8,
    height: height / 28,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.Alternative,
    borderRadius: Constants.borderRadius.main
  },
  text: {
    fontSize: 16,
    fontFamily: "Main",
    color: Colors.mainWhite
  }
});

export default connect(
  mapStateToProps,
  { addFollow, unFollow }
)(Follow);
