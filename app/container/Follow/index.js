import { connect } from "react-redux";
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { addFollow, unFollow } from "../../redux/Actions/profile";

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

  const followButton =
    following === true ? (
      <View style={{ backgroundColor: "gray" }}>
        <TouchableOpacity onPress={unfollowClick}>
          <Text>لغو دنبال کردن</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={{ backgroundColor: "red" }}>
        <TouchableOpacity onPress={followClick}>
          <Text>دنبال کردن</Text>
        </TouchableOpacity>
      </View>
    );

  return <View>{followButton}</View>;
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(
  mapStateToProps,
  { addFollow, unFollow }
)(Follow);
