import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import {
  loadResourcesAsync,
  handleLoadingError,
  handleFinishLoading
  // getLocation
} from "./app/helpers/mainApp";

import AppNavigator from "./app/navigation";

App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // useEffect(() => {
  //   getLocation();
  // }, []);

  const mainApp =
    !isLoadingComplete && !props.skipLoadingScreen ? (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    ) : (
      <View style={{ flex: 1 }}>
        {Platform.OS === "ios" ? (
          <StatusBar barStyle="default" translucent={true} />
        ) : (
          <StatusBar hidden={true} />
        )}
        <AppNavigator />
      </View>
    );

  return mainApp;
};

export default App;
