import { Dimensions, Platform } from "react-native";

// import Constants from "./Constants";
// import Device from "./Device";
// import Color from "./Color";
// import Config from "./Config";
// import Theme from "./Theme";

const { height, width, heightWindow } = Dimensions.get("window");

const Styles = {
  width: Dimensions.get("window").width,
  height: Platform.OS !== "ios" ? height : height - 20,
  navBarHeight: Platform !== "ios" ? height - heightWindow : 0,
  headerHeight: Platform.OS === "ios" ? 40 : 56,

  thumbnailRatio: 1.2, // Thumbnail ratio, the product display height = width * thumbnail ratio

  app: {
    flexGrow: 1
    // backgroundColor: Device.isIphoneX ? "#FFF" : "#000",
    // paddingTop: Device.ToolbarHeight
  },
  FontSize: {
    tiny: 12,
    small: 14,
    medium: 16,
    big: 18,
    large: 20
  },
  IconSize: {
    TextInput: 25,
    ToolBar: 18,
    Inline: 20,
    SmallRating: 14
  },
  FontFamily: {}
};

Styles.Common = {
  Column: {},
  ColumnCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  ColumnCenterTop: {
    alignItems: "center"
  },
  ColumnCenterBottom: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  ColumnCenterLeft: {
    justifyContent: "center",
    alignItems: "flex-start"
  },
  ColumnCenterRight: {
    justifyContent: "center",
    alignItems: "flex-end"
  }
};

export default Styles;
