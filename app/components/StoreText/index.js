import {
  MiniWraper,
  DetailText,
  TextWrapper,
  CommentText,
  MainWrapper,
  TextWrapper1,
  DetailsWraper,
  ButtonWrapper,
  AddressWrapper
} from "./style";
import React from "react";
import { connect } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../config/settings/color";
import GetStorePosts from "../../container/StorePosts";
import { View, Linking, TouchableOpacity, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const StoreText = ({ tel, rate, address, comments, followers, navigation }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flex: 4,
        backgroundColor: Colors.mainWhiteColorWithOpacity
      }}
    >
      <MiniWraper
        style={{
          justifyContent: "center",
          backgroundColor: "rgba(0,0,0,0.03)"
        }}
      >
        <TextWrapper1
          style={{
            height: 50,
            alignItems: "center"
          }}
        >
          {comments.length === 0 ? (
            <DetailText>۰</DetailText>
          ) : (
            <TouchableOpacity>
              <DetailText>{comments.length}</DetailText>
            </TouchableOpacity>
          )}

          {followers.length === 0 ? (
            <DetailText>۰</DetailText>
          ) : (
            <TouchableOpacity>
              <DetailText>{followers.length}</DetailText>
            </TouchableOpacity>
          )}

          {rate == 0 ? (
            <DetailText>۰</DetailText>
          ) : (
            <DetailText>{rate}</DetailText>
          )}
        </TextWrapper1>
      </MiniWraper>
      <MiniWraper>
        <TextWrapper
          style={{
            alignContent: "center",
            backgroundColor: "rgba(0,0,0,0.03)"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("StoreCommentDetails");
            }}
          >
            <DetailText>نظرات</DetailText>
          </TouchableOpacity>

          <TouchableOpacity>
            <DetailText>باشگاه مشتریان</DetailText>
          </TouchableOpacity>

          <DetailText>امتیاز </DetailText>
        </TextWrapper>
      </MiniWraper>
      <MainWrapper style={{ width: "99%" }}>
        <GetStorePosts />
      </MainWrapper>
      <DetailsWraper>
        <Entypo
          name="location-pin"
          color={Colors.StoreIconColor}
          size={width / 12}
        />
        <TouchableOpacity
          style={{ width: "80%" }}
          onPress={() => {
            navigation.navigate("MapScreen");
          }}
        >
          <AddressWrapper numberOfLines={1} ellipsizeMode="tail">
            {address}
          </AddressWrapper>
        </TouchableOpacity>
      </DetailsWraper>

      <DetailsWraper style={{ marginTop: -4 }}>
        <Entypo
          size={width / 12}
          name="phone"
          style={{ marginRight: 6 }}
          color={Colors.StoreIconColor}
        />

        <AddressWrapper
          onPress={() => {
            Linking.openURL(`tel:${tel}`);
          }}
          style={{ width: "40%" }}
        >
          {tel}
        </AddressWrapper>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Comment");
          }}
          style={{ position: "absolute", right: 5 }}
        >
          <ButtonWrapper>
            <CommentText>ثبت نظر</CommentText>
          </ButtonWrapper>
        </TouchableOpacity>
      </DetailsWraper>
    </View>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post
});

export default connect(mapStateToProps)(StoreText);
