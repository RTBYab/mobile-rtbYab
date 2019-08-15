import React from "react";
import { View, Platform, StatusBar } from "react-native";

const SubNavigation = ({ children }) => {
  return (
    <View style={{ flex: 1 }}>
      {children}
      {Platform.OS === "ios" ? (
        <StatusBar barStyle="default" translucent={true} />
      ) : (
        <StatusBar hidden={true} />
      )}
    </View>
  );
};
export default SubNavigation;
