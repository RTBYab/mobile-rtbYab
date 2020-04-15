import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export default StyleSheet.create({
  // white holder
  container: {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.01)",
  },
  // Gray Section
  cardView: {
    // aspectRatio: 0.95,
    borderRadius: width / 80,

    width: "90%",
    height: "55%",
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
    marginBottom: height / 15,
  },
  cardimage: {
    width: width / 1.2,
    height: height / 10,
  },
  cardTitle: {
    textAlign: "center",
    color: "#fff",
    fontFamily: "Main2",
    fontSize: width / 17,
    marginTop: height / 25,
    marginBottom: height / 120,
  },
  cardSubTilte: {
    color: "#fff",
    fontFamily: "Main",
    fontSize: width / 27,
  },
});
