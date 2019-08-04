import React from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { LinearGradient } from "expo";
import style from "./style";

const GradientButton = ({ props }) => {
  return (
    <TouchableOpacity>
      {/* <LinearGradient
        start={[0, 0.5]}
        end={[1, 0.5]}
        colors={["#EFBB35", "#4AAE9B"]}
        style={{ borderRadius: 5 }}
      > */}
      <View>
        <Text>buttonName</Text>
      </View>
      {/* </LinearGradient> */}
    </TouchableOpacity>
  );
};

export default GradientButton;
