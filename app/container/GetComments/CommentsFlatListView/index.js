import {
  Container,
  TextHeader,
  TextBody,
  Image,
  HLine,
  Viewer,
  HView,
  ReverseHView,
} from "./style";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import React, { useState } from "react";
import Colors from "../../../config/settings/color";
import Const from "../../../config/settings/Constants";
import { Dimensions, TouchableOpacity, Alert, View } from "react-native";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";
import {
  likeComment,
  unLikeComment,
  deleteComment,
  getStoreByStoreOwner,
} from "../../../redux/Actions/storeAction";

const { width } = Dimensions.get("window");

const CommentFlatListView = ({
  item,
  auth,
  store,
  navigation,
  likeComment,
  unLikeComment,
  deleteComment,
  getStoreByStoreOwner,
}) => {
  const { token, user } = auth;
  const storeId = store.store._id;
  const [hearted, setHearted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const userId = user._id;

  const report = () => {
    Alert.alert(
      "گزارش ",
      "گزارش محتوی پیام به رتبه یاب",
      [
        {
          text: "لغو ارسال",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "ارسال گزارش",
          onPress: () => console.log("OK Pressed"),
        },
      ],
      { cancelable: false }
    );
  };

  const DeleteConfirmation = () => {
    Alert.alert(
      "حذف نظر ارسالی ",
      "آیا اطمنان به حذف این نظر دارید؟",
      [
        {
          text: "لغو درخواست",
          onPress: () => {
            console.log("canceled pressed!");
          },
          style: "cancel",
        },
        {
          text: "حذف نظر",
          onPress: () => {
            const commentId = item._id;
            toggleModal(), deleteComment({ commentId, storeId, token });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const toggleModal = async () => {
    await setIsModalVisible(!isModalVisible);
  };

  const likeButtom = async (commentId) => {
    setHearted(!hearted);
    await likeComment({ commentId, token, storeId });
  };
  const unLikeButtom = async (commentId) => {
    setHearted(!hearted);
    await unLikeComment({ commentId, token, storeId, userId });
  };

  return (
    <View style={{ flex: 1, margin: width / 36 }}>
      <View style={{ flex: 1 }}>
        <Modal
          coverScreen={true}
          avoidKeyboard={true}
          swipeDirection="down"
          isVisible={isModalVisible}
          onSwipeComplete={toggleModal}
          onBackdropPress={toggleModal}
        >
          <View
            style={{
              flex: 1,
              bottom: 3,
              heigth: "30%",
              width: "100%",
              borderRadius: "5%",
              position: "absolute",
              backgroundColor: "#efefef",
            }}
          >
            <TouchableOpacity
              onPress={DeleteConfirmation}
              style={{ marginVertical: width / 30 }}
            >
              <ReverseHView>
                <MaterialIcons
                  name="delete"
                  size={width / 20}
                  style={{ margin: width / 90 }}
                />
                <TextBody style={{ marginRight: -width / 290 }}> حذف </TextBody>
              </ReverseHView>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ marginVertical: width / 30 }}
              onPress={() => {
                navigation.navigate("EditComment", {
                  section: item,
                }),
                  toggleModal();
              }}
            >
              <ReverseHView>
                <MaterialIcons
                  name="mode-edit"
                  size={width / 20}
                  style={{ margin: width / 60 }}
                />
                <TextBody style={{ marginRight: -width / 80 }}>
                  {" "}
                  ویرایش
                </TextBody>
              </ReverseHView>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleModal}
              style={{
                alignItems: "center",
                marginVertical: width / 50,
              }}
            >
              <FontAwesome
                name="close"
                size={width / 15}
                color={Colors.Alternative}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </View>

      <Viewer>
        <HView>
          {store.store.photo ? (
            <Image
              source={{
                uri:
                  Const.URL.Image + `${item.commentedBy}/${store.store.photo}`,
              }}
            />
          ) : (
            <Image source={require("../../../../assets/image/mobl.jpeg")} />
          )}
          <TextHeader> {item.commentOwner}</TextHeader>
          <ReverseHView
            style={{ position: "absolute", marginLeft: width / 3.3 }}
          >
            {item.commentedBy === user._id ? (
              <TouchableOpacity
                onPress={() => {
                  setIsModalVisible(!isModalVisible);
                }}
                style={{ position: "absolute", left: width / 1.68 }}
              >
                <Feather name="more-vertical" size={width / 20} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ position: "absolute", left: width / 1.68 }}
                onPress={() => report()}
              >
                <FontAwesome name="exclamation-triangle" size={width / 25} />
              </TouchableOpacity>
            )}

            {hearted == true || item.likedBy.find((id) => id == user._id) ? (
              <TouchableOpacity
                style={{ position: "absolute", left: width / 1.88 }}
                onPress={() => {
                  unLikeButtom(item._id);
                }}
              >
                <FontAwesome name="heart" size={width / 25} color="red" />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ position: "absolute", left: width / 1.88 }}
                onPress={() => {
                  likeButtom(item._id);
                }}
              >
                <FontAwesome name="heart-o" size={width / 25} />
              </TouchableOpacity>
            )}
          </ReverseHView>
        </HView>
        {item.text.length > 40 ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Comment");
            }}
          >
            <TextBody numberOfLines={1.5} ellipsizeMode="tail">
              {item.text}
            </TextBody>
          </TouchableOpacity>
        ) : (
          <TextBody>{item.text}</TextBody>
        )}
      </Viewer>
      <HLine />
    </View>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  store: state.store,
});

export default connect(mapStateToProps, {
  likeComment,
  unLikeComment,
  deleteComment,
  getStoreByStoreOwner,
})(CommentFlatListView);
