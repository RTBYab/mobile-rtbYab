import React from "react";
import { View, Text } from "react-native";
import AnimatdFlatList from "../components/AnimatedFlatList";
const ResultScreen = ({ navigation }) => {
  const store = navigation.getParam("store");

  console.log("store", store);
  const { title, description, address, image } = store;
  return (
    <View>
      <AnimatdFlatList
        title={title}
        description={description}
        address={address}
        image={image}
        navigation={navigation}
      />
    </View>
  );
};

ResultScreen.navigationOptions = {
  header: null
};

export default ResultScreen;
