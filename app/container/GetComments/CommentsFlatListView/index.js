import {
  Container,
  TextHeader,
  TextBody,
  Image,
  HLine,
  Viewer,
  HView,
  ReverseHView
} from "./style";
import {
  Dimensions,
  TouchableOpacity,
  Alert,
  Text,
  View,
  Button
} from "react-native";
import { connect } from "react-redux";
import Modal from "react-native-modal";
import React, { useState } from "react";
import Const from "../../../config/settings/Constants";
import Colors from "../../../config/settings/color";
import { FontAwesome, Feather, MaterialIcons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const CommentFlatListView = ({ item, auth, store, navigation }) => {
  const [hearted, setHearted] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { token, user } = auth;

  const report = () => {
    Alert.alert(
      "گزارش ",
      "گزارش محتوی پیام به رتبه یاب",
      [
        {
          text: "لغو ارسال",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "ارسال گزارش",
          onPress: () => console.log("OK Pressed")
        }
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
          style: "cancel"
        },
        {
          text: "حذف نظر",
          onPress: () => {
            toggleModal(), console.log("comment deleted!");
          }
        }
      ],
      { cancelable: false }
    );
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <Container>
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
              backgroundColor: "#efefef"
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
            <TouchableOpacity style={{ marginVertical: width / 30 }}>
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
                marginVertical: width / 50
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
                uri: Const.URL.Image + `${auth.user._id}/${store.store.photo}`
              }}
            />
          ) : (
            <Image source={require("../../../../assets/image/mobl.jpeg")} />
          )}
          <TextHeader>: {item.commentOwner}</TextHeader>
          <ReverseHView>
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

            {hearted == false ? (
              <TouchableOpacity
                style={{ position: "absolute", left: width / 1.88 }}
                onPress={() => {
                  setHearted(!hearted);
                }}
              >
                <FontAwesome name="heart-o" size={width / 25} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{ position: "absolute", left: width / 1.88 }}
                onPress={() => {
                  setHearted(!hearted);
                }}
              >
                <FontAwesome name="heart" size={width / 25} color="red" />
              </TouchableOpacity>
            )}
          </ReverseHView>
        </HView>
        {item.text.length > 40 ? (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ContinueComment");
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
    </Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(mapStateToProps)(CommentFlatListView);
