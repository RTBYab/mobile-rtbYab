import style from "./style";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const Card = ({ image, title, subTitle }) => {
  const { container, cardView, cardimage, cardTitle, cardSubTilte } = style;
  return (
    <TouchableWithoutFeedback
      accessible={false}
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={container}>
        <View style={cardView}>
          {/* <Image
          source={require("../../../assets/image/Appnico-logo.png")}
          style={cardimage}
        /> */}
          <Text style={cardTitle}>{title} </Text>
          <Text style={cardSubTilte}>{subTitle} </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Card;
