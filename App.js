import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import { Platform, StatusBar, View, Text } from "react-native";
import {
  loadResourcesAsync,
  handleLoadingError,
  handleFinishLoading
  // getLocation
} from "./app/helpers/mainApp";

import { Provider } from "react-redux";
import store from "./app/redux/store";
import setAuthToken from "./app/helpers/auth-token";
import AppNavigator from "./app/navigation";
import * as SecureStore from "expo-secure-store";
import { loadUser } from "./app/redux/Actions/auth";

App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (SecureStore.getItemAsync("token")) {
    setAuthToken(loadUser());
  }

  useEffect(() => {
    // getLocation();
    store.dispatch(loadUser());
  }, []);

  const mainApp =
    !isLoadingComplete && !props.skipLoadingScreen ? (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    ) : (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          {Platform.OS === "ios" ? (
            <StatusBar barStyle="default" translucent={true} />
          ) : (
            <StatusBar hidden={true} />
          )}
          <AppNavigator />
        </View>
      </Provider>
    );

  return mainApp;
};

export default App;
