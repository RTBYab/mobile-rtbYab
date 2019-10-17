import {
  Text,
  Image,
  Title,
  HLine,
  Caption,
  NoticeText,
  ButtonWrapper,
  SimpleContainer
} from "./style";
import { connect } from "react-redux";
import React, { useState } from "react";
import Colors from "../../config/settings/color";
import { addNewPost } from "../../redux/Actions/post";
import ImagePicker from "../../components/ImagePicker";
import Constants from "../../config/settings/Constants";
import { EvilIcons, Feather, MaterialIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const AddNewPost = ({ navigation, pageTitle, auth, addNewPost }) => {
  const [title, setTitle] = useState("");
  const [photo, setPhoto] = useState(null);
  const [caption, setCaption] = useState("");
  const [loading, setLoading] = useState(null);

  const submitImage = async imagePath => {
    setPhoto(imagePath);
  };

  const submitNewPost = async () => {
    if (photo === null) {
      return Alert.alert("عکس کو پس؟", " عکس یادت رفت", [{ text: "اهان" }]);
    }
    const { token } = auth;
    const id = auth.user._id;
    setLoading(true);
    await addNewPost({ id, token, photo, title, caption, navigation });
    setLoading(false);
    setPhoto(null);
    setTitle("");
    setCaption("");
  };

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      scrollEnabled={true}
    >
      {loading === true ? (
        <ActivityIndicator
          size="large"
          color={Colors.Alternative}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      ) : (
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps="handled"
          scrollEnabled={true}
        >
          <Text style={{ textAlign: "center" }}> {pageTitle} </Text>
          <HLine style={{ marginTop: 10 }} />
          <HLine style={{ marginTop: -5 }} />
          <SimpleContainer>
            <EvilIcons size={40} name="image" color={Colors.Alternative} />
            <Text>تصویر :</Text>
          </SimpleContainer>
          <ImagePicker submitImage={submitImage}>
            {photo === null ? (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <NoticeText style={{ marginTop: 10, marginBottom: -50 }}>
                  برای انتخاب تصویر جدید بر روی عکس کلیک کنید
                </NoticeText>
                <Image
                  source={require("../../../assets/image/store-farsi-transparent.png")}
                />
              </View>
            ) : (
              <Image source={{ uri: photo }} style={{ borderRadius: 9 }} />
            )}
          </ImagePicker>
          <HLine style={{ marginTop: -48 }} />
          <View style={{ flex: 1, marginTop: 40 }}>
            <SimpleContainer>
              <MaterialIcons
                size={32}
                name="short-text"
                color={Colors.Alternative}
              />
              <Text> عنوان :</Text>
            </SimpleContainer>
            <Title
              spellCheck={false}
              autoCorrect={false}
              maxLength={Constants.textInput.postTitle}
              underlineColorAndroid={Colors.mainWhite}
              onChangeText={title => setTitle(title)}
              placeholder="حداکثر ۲۰ کلمه"
            />
            <HLine />
            <SimpleContainer>
              <Feather size={26} name="file-text" color={Colors.Alternative} />
              <Text> توضیحات :</Text>
            </SimpleContainer>
            <Caption
              spellCheck={false}
              autoCorrect={false}
              multiline={true}
              blurOnSubmit={true}
              clearButtonMode="always"
              underlineColorAndroid={Colors.mainWhite}
              maxLength={Constants.textInput.postCaption}
              onChangeText={caption => setCaption(caption)}
              placeholder="حداکثر ۲۵۰ کلمه"
            />
            <HLine />
          </View>
          <TouchableOpacity
            onPress={submitNewPost}
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 13
            }}
          >
            <ButtonWrapper>
              <Text style={{ textAlign: "center", color: "#fff" }}>ارسال</Text>
            </ButtonWrapper>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      )}
    </KeyboardAwareScrollView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addNewPost }
)(AddNewPost);
