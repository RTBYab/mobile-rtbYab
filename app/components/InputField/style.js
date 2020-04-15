import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  container: {
    minWidth: "70%",
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderRadius: width / 80,
    paddingVertical: width / 20,
    paddingHorizontal: width / 5,
    marginVertical: height / 120,
  },

  inputFieldText: {
    paddingRight: width / 75,
    position: "absolute",
    minWidth: width / 1.5,
    color: "#000",
    fontFamily: "Main",
    textAlign: "center",
    fontSize: width / 24,
  },

  inputSubTitle: {
    color: "gray",
    fontFamily: "Main",
    textAlign: "center",
    fontSize: width / 27,
    marginBottom: height / 25,
  },
  inputImage: {
    position: "absolute",
    padding: width / 120,
    top: height / 60,
    left: width / 1.7,
    width: 25,
    height: 25,
  },
});
