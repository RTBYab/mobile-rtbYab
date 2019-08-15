import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Dimensions, Platform } from "react-native";
import Search from "../components/Search";
const { width } = Dimensions.get("window");

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
        <View
          style={{
            flex: 0.5,
            width: width / 2,
            backgroundColor: "rgb(125, 87, 252)",
            marginBottom: 2
          }}
        />
        <View
          style={{
            flexDirection: "row",
            ...Platform.select({
              android: {
                marginBottom: -20
              }
            })
          }}
        >
          <Text style={mainText2}> یاب</Text>
          <Text style={mainText1}>رتبه </Text>
        </View>

        <Search
          // searchResult={result => navigate("Result", result)}
          navigation={this.props.navigation}
          // onBack={goBack}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainText1: {
    fontFamily: "Main2",
    alignSelf: "center",
    fontSize: 90,
    margin: 10,
    marginTop: -220,
    alignSelf: "center",
    color: "rgb(125, 87, 252)"
  },
  mainText2: {
    fontFamily: "Main2",
    alignSelf: "center",
    fontSize: 90,
    margin: 20,
    marginTop: -220,
    color: "white",
    alignSelf: "center"
  }
});
