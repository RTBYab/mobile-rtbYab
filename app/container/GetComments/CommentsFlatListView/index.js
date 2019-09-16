import { connect } from "react-redux";
import React, { useEffect } from "react";
import Const from "../../../config/settings/Constants";
import { View, Text, StyleSheet, Image } from "react-native";
import { getStoreProfilePhoto } from "../../../redux/Actions/storeAction";

const CommentFlatListView = ({ item, auth, store, getStoreProfilePhoto }) => {
  const { token, user } = auth;

  useEffect(() => {
    getStoreProfilePhoto(user._id, token);
  }, [getStoreProfilePhoto]);

  return (
    <View style={styles.mainView}>
      <View style={styles.boxView}>
        {console.log("ssss", store.store.photo)}

        {store.photo ? (
          <Image
            style={{ width: 30, height: 30 }}
            source={{
              uri: Const.URL.Image + `${auth.user._id}/${store.photo}`
            }}
          />
        ) : (
          <Image
            style={{ width: 30, height: 30 }}
            source={require("../../../../assets/image/mobl.jpeg")}
          />
        )}

        <Text
          style={{
            fontSize: 18,
            marginLeft: 20,
            textAlign: "right",
            fontFamily: "Main2"
          }}
        >
          {item.commentOwner}
        </Text>

        <Text style={{ textAlign: "right", fontFamily: "Main", fontSize: 14 }}>
          {item.created}
        </Text>
      </View>
      <Text style={{ textAlign: "right", fontFamily: "Main", fontSize: 18 }}>
        {item.text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxView: {
    margin: 10,
    alignItems: "center",
    flexDirection: "row-reverse"
  },
  mainView: {
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 4
    // },
    // shadowOpacity: 0.32,
    // shadowRadius: 2.46,
    // elevation: 3
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(
  mapStateToProps,
  { getStoreProfilePhoto }
)(CommentFlatListView);
