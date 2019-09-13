import {
  MiniWraper,
  DetailText,
  TextWrapper,
  MainWrapper,
  TextWrapper1,
  DetailsWraper,
  ButtonWrapper,
  AddressWrapper
} from "./style";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../config/settings/color";
import FlatListView from "../../container/FlatListView";
import { Text, View, Linking, FlatList, TouchableOpacity } from "react-native";

const StoreText = ({ tel, rate, address, comments, followers, navigation }) => {
  return (
    <View
      style={{
        flex: 4,
        backgroundColor: Colors.mainWhiteColorWithOpacity
      }}
    >
      <MiniWraper style={{ backgroundColor: "rgba(0,0,0,0.03)" }}>
        <TextWrapper1
          style={{
            height: 50
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
          <TouchableOpacity>
            <DetailText>نظرات</DetailText>
          </TouchableOpacity>

          <TouchableOpacity>
            <DetailText>باشگاه مشتریان</DetailText>
          </TouchableOpacity>

          <DetailText>امتیاز </DetailText>
        </TextWrapper>
      </MiniWraper>
      <MainWrapper>
        <View
          style={{
            flex: 1,
            marginTop: 5,
            marginBottom: 12,
            flexWrap: "wrap",
            alignItems: "center",
            flexDirection: "row-reverse"
          }}
        >
          <FlatList
            data={dummyData}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <FlatListView item={item} />}
          />
        </View>
      </MainWrapper>
      <DetailsWraper>
        <Entypo name="location-pin" color={Colors.StoreIconColor} size={28} />
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
          size={26}
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
            <Text
              style={{
                color: "#ffff",
                fontSize: 17,
                textAlign: "center",
                fontFamily: "Main2"
              }}
            >
              ثبت نظر
            </Text>
          </ButtonWrapper>
        </TouchableOpacity>
      </DetailsWraper>
    </View>
  );
};

const dummyData = [
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  },
  {
    image: require("../../../assets/image/mobl.jpeg")
  }
];

export default StoreText;
