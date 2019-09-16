import React, { PureComponent } from "react";
import Search from "../components/Search";
import Colors from "../config/settings/color";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";

const { width, height } = Dimensions.get("window");

export default class HomeScreen extends PureComponent {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    tabBarLabel: null
  });
  render() {
    const { mainText1, mainText2 } = styles;
    const { navigate, goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.mainView}>
          <View
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={mainText1}>رتبه </Text>
          </View>
          <View
            style={{
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.Alternative
            }}
          >
            <Text style={mainText2}> یاب</Text>
          </View>
        </View>
        <Search
          // style={{ marginTop: width / 2 }}
          // searchResult={result => navigate("Result", result)}
          navigation={this.props.navigation}
          // onBack={goBack}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    flexDirection: "row-reverse"
  },
  mainText1: {
    fontSize: 90,
    // textAlign: "center",
    fontFamily: "Main2",
    marginRight: width / 2,
    color: Colors.Alternative
  },
  mainText2: {
    fontSize: 90,
    fontFamily: "Main2",
    // textAlign: "center",
    marginLeft: width / 1.95,
    color: Colors.mainWhite
  }
});
