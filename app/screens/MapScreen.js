import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../config/settings/Constants";
import Map from "../container/Map/StoreLocation";
import { View, TouchableOpacity } from "react-native";

const MapScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ zIndex: 10, marginTop: 35 }}
      >
        <Ionicons
          style={{ marginLeft: 10 }}
          name="ios-arrow-round-back"
          size={Constants.icon.backIconSize}
        />
      </TouchableOpacity>
      <Map show={true} scrollEnabled={false} />
    </View>
  );
};

MapScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export default MapScreen;
