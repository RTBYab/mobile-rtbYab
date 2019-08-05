import React from "react";
import { View, Text } from "react-native";

const StoreScreen = ({ navigation }) => {
  const data = navigation.getParam("data");
  console.log("datasss", data);
  return (
    <View>
      <Text>{data[0]}</Text>
      <Text>{data[1]}</Text>
      <Text>{data[2]}</Text>
    </View>
  );
};

StoreScreen.navigationOption = {
  header: null
};

export default StoreScreen;
