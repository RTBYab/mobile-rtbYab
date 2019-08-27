import React from "react";
import EditAddress from "../container/EditAddress";
import { SafeAreaView, ScrollView } from "react-native";

const EditAddressScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <EditAddress navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

EditAddressScreen.navigationOptions = {
  header: null,
  tabBarVisible: false
};
export default EditAddressScreen;
