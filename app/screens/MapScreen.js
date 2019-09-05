import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Constants from "../config/settings/Constants";
import Map from "../container/Map/StoreLocation";
import { SafeAreaView, TouchableOpacity } from "react-native";

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons
          style={{ marginLeft: 10 }}
          name="ios-arrow-round-back"
          size={Constants.icon.backIconSize}
        />
      </TouchableOpacity>
      <Map
        show={true}
        scrollEnabled={false}
        // navigation={navigation}
        // showsUserLocation={true}
        // locationPicker={this.handleLocationPicker}
      />
    </SafeAreaView>
  );
};

MapScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};

export default MapScreen;
