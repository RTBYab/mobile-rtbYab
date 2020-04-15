import { AppLoading } from "expo";
import React, { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
import {
  loadResourcesAsync,
  handleLoadingError,
  handleFinishLoading,
  // getLocation
} from "./app/helpers/mainApp";
import decode from "jwt-decode";
import { Provider } from "react-redux";
import store from "./app/redux/store";
import Loading from "./app/components/Loading";
import AppNavigator from "./app/navigation";
import { persistStore } from "redux-persist";
import SubNavigation from "./app/navigation/SubNavigation";
import { PersistGate } from "redux-persist/es/integration/react";

// import * as SecureStore from "expo-secure-store";

App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const persistor = persistStore(store);

  useEffect(() => {
    if (AsyncStorage.token) {
      setAuthToken(AsyncStorage.token);
      const decodedData = decode(AsyncStorage.token);
      console.warn(decodedData);
      store.dispatch(loadUser(decodedData._id));
    }
  }, []);

  useEffect(() => {
    // getLocation();
    // store.dispatch(loadUser());
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
        {/* <PersistGate loading={<Loading />} persistor={persistor}> */}
        <SubNavigation>
          <AppNavigator />
        </SubNavigation>
        {/* </PersistGate> */}
      </Provider>
    );

  return mainApp;
};

export default App;
