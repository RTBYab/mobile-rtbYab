import React from "react";
import { SafeAreaView } from "react-native";
import FirstRegistration from "../container/FirstRegistration";

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
