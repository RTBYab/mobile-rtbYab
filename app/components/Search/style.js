import { StyleSheet, Platform } from "react-native";
// import { Color } from "../../config/settings/color";

export default StyleSheet.create({
  container: {
    marginTop: 50,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 10,
    backgroundColor: "white",
    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: {
          height: 1,
          width: 1
        }
      },
      android: {
        elevation: 4
      }
    })
  },
  button: {
    margin: 30,
    marginRight: 120,
    marginLeft: 120,
    alignItems: "center",
    borderColor: "rgba(0, 0, 0, 0.3)",
    borderWidth: 0.01,
    borderRadius: 4,
    backgroundColor: "#efefef",
    fontWeight: "300",

    ...Platform.select({
      ios: {
        shadowColor: "rgba(0, 0, 0, 0.3)",
        shadowOpacity: 0.5,
        shadowRadius: 1,
        padding: 4,
        shadowOffset: {
          height: 1,
          width: 1
        }
      },
      android: {
        elevation: 4
      }
    })
  },
  serachText: {
    fontFamily: "Main",
    fontSize: 18
  },
  secondaryContainer: {
    flexDirection: "row-reverse",
    padding: 5
  },
  textInput: {
    ...Platform.select({
      ios: {
        padding: 3,
        fontSize: 16,
        color: "black",
        alignSelf: "auto",
        textAlign: "right",
        fontFamily: "Main"
      },
      android: {
        fontFamily: "Main",
        color: "black",
        fontSize: 16,
        textAlign: "right"
      }
    })
  },
  icon: {
    margin: 10,
    padding: 5
  },
  separator: {
    width: 0.5,
    height: 20,
    backgroundColor: "#ccc"
  }
});
