import { Container, DetailForm, TitleBar, MainContainer } from "./style";
import Map from "../Map";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Entypo, AntDesign, Ionicons } from "@expo/vector-icons";

const FirstRegistration = ({ navigation }) => {
  return (
    <MainContainer>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          name="ios-arrow-round-back"
          size={65}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Container>
        <TitleBar
          maxLength={30}
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          scrollEnabled={true}
          underlineColorAndroid="#fff"
          placeholder="نام کسب و کار "
        />
        <DetailForm
          maxLength={130}
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          scrollEnabled={true}
          underlineColorAndroid="#fff"
          placeholder="معرفی کسب و کار در حداکثر ۱۳۰ کلمه"
        />
      </Container>
      <Map />
    </MainContainer>
  );
};

export default FirstRegistration;
