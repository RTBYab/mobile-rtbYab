import React, { useState } from "react";
import { View, FlatList, Text, Animated, ListItem, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

// TODO connect to redux
const AnimatedFlatList = ({
  navigation,
  title,
  description,
  address,
  image
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Store", {
            data: [title, description, address, image]
          });
        }}
      >
        <Text>{title}</Text>
        <Text>{description}</Text>
        <Text>{address}</Text>
        <Image
          source={image}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedFlatList;
