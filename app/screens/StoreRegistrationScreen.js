import React from "react";
import { SafeAreaView, Text } from "react-native";
import FirstRegistration from "../components/FirstRegistration";

const StoreRegistrationScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FirstRegistration navigation={navigation} />
    </SafeAreaView>
  );
};

export default StoreRegistrationScreen;

StoreRegistrationScreen.navigationOptions = {
  header: null
};
