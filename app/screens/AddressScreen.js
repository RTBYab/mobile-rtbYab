import { TouchableOpacity, Text, SafeAreaView, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const { width } = Dimensions.get("window");

const AddressScreen = ({ navigation, address }) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          name="ios-arrow-round-back"
          size={width / 10}
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
      <Text>AddressScreen</Text>
    </SafeAreaView>
  );
};

AddressScreen.navigationOptions = {
  tabBarVisible: false
};

export default AddressScreen;
