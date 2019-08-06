import color from "../../config/settings/color";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  commentStyle: {
    backgroundColor: color.buttonOrange,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    borderRadius: 5,
    marginTop: 20
  },
  labelStyle: {
    fontFamily: "Main",
    color: color.mainBackground,
    fontSize: 18,
    textAlign: "center"
  }
});
