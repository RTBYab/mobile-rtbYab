import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: width / 80,
    paddingVertical: width / 37,
    paddingHorizontal: width / 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.75)",
  },

  buttonName: {
    width: width / 2,
    color: "#fff",
    fontFamily: "Main2",
    textAlign: "center",
    fontSize: width / 19,
  },
});
