import { EvilIcons } from "@expo/vector-icons";

// import * as Location from "expo-location";
// import * as Permissions from "expo-permissions";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

export const loadResourcesAsync = async () => {
  await Promise.all([
    Asset.loadAsync([
      // require("../assets/images/robot-dev.png"),
      // require("../assets/images/robot-prod.png")
    ]),
    Font.loadAsync({
      // ...Ionicons.font,
      ...EvilIcons.font,
      Main: require("../../assets/fonts/IRANSansMobile_Light.ttf"),
      Main2: require("../../assets/fonts/IRANSansMobile_Medium.ttf"),
      Main3: require("../../assets/fonts/IRANSansMobile_Bold.ttf")
    })
  ]);
};

export const handleLoadingError = async err => {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  await console.warn(err);
};
export const handleFinishLoading = async setLoadingComplete => {
  await setLoadingComplete(true);
};

// export const getLocation = async () => {
//   try {
//     const { status } = await Permissions.askAsync(Permissions.LOCATION);
//     if (status !== "granted") console.log("OOps!");

//     const location = await Location.getCurrentPositionAsync({
//       enableHighAccuracy: true
//     });
//     console.log(
//       "longitude: ",
//       location.coords.longitude,
//       "latitude:",
//       location.coords.latitude
//     );
//   } catch (err) {
//     console.log(err, ":(");
//   }
// };
