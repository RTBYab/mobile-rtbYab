import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../redux/Actions/post";
import { MaterialIcons } from "@expo/vector-icons";
import Const from "../../config/settings/Constants";

const { width } = Dimensions.get("window");

const PostDetail = ({
  id,
  auth,
  body,
  title,
  photo,
  postId,
  deletePost,
  navigation
}) => {
  const { token } = auth;
  helperRender = auth.user._id === id && (
    <TouchableOpacity
      onPress={() => {
        deletePost(postId, token, navigation);
      }}
    >
      <View>
        <MaterialIcons name="delete" size={width / 14} color="red" />
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView>
      <View style={styles.viewStyle}>
        <Image
          source={{
            uri: Const.URL.Posts + `/${id}/${photo}`
          }}
          style={{
            width: width / 1.3,
            height: width / 1.3,
            borderRadius: width / 64
          }}
        />
        {helperRender}
      </View>

      <View style={styles.rowView}>
        <Text style={styles.textTitle}>عنوان :</Text>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
      <View style={styles.rowView}>
        <Text style={styles.textTitle}>توضیحات :</Text>
        <Text style={styles.textStyle}>{body}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "Main"
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    // overFlow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.94,

    elevation: 5.6
  },
  textTitle: {
    fontSize: 18,
    textAlign: "right",
    fontFamily: "Main2"
  },
  rowView: {
    margin: 15,
    width: "85%",
    marginTop: 25,
    alignItems: "center",
    flexDirection: "row-reverse"
  }
});

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { deletePost }
)(PostDetail);
