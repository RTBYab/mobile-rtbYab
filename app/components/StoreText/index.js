import {
  DetailText,
  TextWrapper,
  MiniWraper,
  MainWrapper,
  TextWrapper1,
  DetailsWraper
} from "./style";
import React from "react";
import Colors from "../../config/settings/color";
import { View, Image, TouchableOpacity } from "react-native";

const StoreText = ({ comments, followers, rate }) => {
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
          {comments == 0 ? (
            <DetailText>۰</DetailText>
          ) : (
            <TouchableOpacity>
              {" "}
              <DetailText>{comments}</DetailText>{" "}
            </TouchableOpacity>
          )}

          {followers == 0 ? (
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
            flexWrap: "wrap",
            alignItems: "flex-end",
            flexDirection: "row-reverse"
          }}
        >
          {dummyData.map((image, index) => (
            <Image
              key={index}
              style={{
                margin: 5,
                width: 100,
                height: 100,
                borderRadius: 4,
                marginRight: 16
              }}
              source={image.image}
            />
          ))}
        </View>
      </MainWrapper>
      <DetailsWraper>
        <DetailText>نظرات</DetailText>
        <DetailText>باشگاه مشتریان</DetailText>
        <DetailText>امتیاز </DetailText>
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
