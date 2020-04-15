import {
  View,
  Text,
  Image,
  Alert,
  Dimensions,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { connect } from "react-redux";
import Colors from "../../config/settings/color";
import { MaterialIcons } from "@expo/vector-icons";
import Const from "../../config/settings/Constants";
import { deletePost } from "../../redux/Actions/post";

const { width, height } = Dimensions.get("window");

const PostDetail = ({
  id,
  auth,
  body,
  title,
  photo,
  postId,
  postedBy,
  deletePost,
  navigation,
}) => {
  const { token } = auth;

  const confirmAlert = () => {
    Alert.alert("حذف پست", "ایا اطمینان دارید؟", [
      {
        text: "لغو",
        onPress: () => console.log("NO Pressed"),
        style: "cancel",
      },
      { text: "حذف", onPress: () => deletePost(postId, token, navigation) },
    ]);
  };
  helperRender = auth.user._id === id && (
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("EditPost", {
            data: { body, title, photo, postId, id, postId },
          });
        }}
      >
        <View>
          <View
            style={{
              borderRadius: "50%",
              padding: width / 100,
              marginHorizontal: width / 25,
              backgroundColor: Colors.Alternative,
            }}
          >
            <MaterialIcons name="edit" size={width / 18} color="white" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          confirmAlert();
        }}
      >
        <View>
          <View
            style={{
              padding: width / 100,
              backgroundColor: Colors.Alternative,
              borderRadius: "50%",
            }}
          >
            <MaterialIcons name="delete" size={width / 18} color="white" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.mainScrollView}>
      <View style={styles.viewStyle}>
        <Image
          source={{
            uri: Const.URL.Posts + `/${id}/${photo}`,
          }}
          style={{
            width: width / 1.3,
            height: width / 1.3,
            borderRadius: width / 64,
            marginTop: "3%",
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
  mainScrollView: {
    height: "98%",
  },
  textStyle: {
    fontSize: 16,
    textAlign: "right",
    fontFamily: "Main",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    // overFlow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.35,
    shadowRadius: 3.94,

    elevation: 5.6,
  },
  textTitle: {
    fontSize: 18,
    textAlign: "right",
    fontFamily: "Main2",
  },
  rowView: {
    margin: 15,
    width: "85%",
    marginTop: 25,
    alignItems: "center",
    flexDirection: "row-reverse",
  },
  buttons: {
    flexDirection: "row",
    marginTop: height / 75,
    alignItems: "center",
    justifyContent: "center",
  },
});

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { deletePost })(PostDetail);
