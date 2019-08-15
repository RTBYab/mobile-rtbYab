import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RegistrationScreen = () => {
  return (
    <View style={styles.mainStyle}>
      <Text>RegistrationScreen</Text>
    </View>
  );
};

export default RegistrationScreen;

RegistrationScreen.navigationOptions = {
  // header: null
};

const styles = StyleSheet.create({
  mainStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
