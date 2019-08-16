import { TouchableOpacity, Text, SafeAreaView } from "react-native";
// import Language from "../../config/settings/Language";
// import { style } from "./style";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

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
          size={65}
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
