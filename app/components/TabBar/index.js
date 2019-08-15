/** @format */

import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  View,
  Platform,
  StyleSheet,
  AsyncStorage,
  TouchableWithoutFeedback
} from "react-native";
import { StackActions } from "react-navigation";
import * as Animatable from "react-native-animatable";
import { connect } from "react-redux";

import Device from "../../config/settings/Device";
import decode from "jwt-decode";

// import console = require("console");

const styles = StyleSheet.create({
  tabbar: {
    height: Device.isIphoneX ? 60 : 49,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    backgroundColor: "black"
  },
  tab: {
    alignSelf: "stretch",
    flex: 1,
    alignItems: "center",
    ...Platform.select({
      ios: {
        justifyContent: Device.isIphoneX ? "flex-start" : "center",
        paddingTop: Device.isIphoneX ? 12 : 0
      },
      android: {
        justifyContent: "center"
      }
    })
  }
});

class TabBar extends PureComponent {
  onPress = (index, route) => {
    this.refs[`tabItem${index}`].flipInY(900);

    // back to main screen when is staying child route

    if (route.routes && route.routes.length > 1 && index !== 1) {
      this.props.navigation.dispatch(
        StackActions.popToTop({ key: route.key, immediate: true })
      );
    } else {
      this.props.navigation.navigate(route.key);
    }
  };

  getUserRole = async () => {
    const token = await AsyncStorage.getItem("token");
    const userRole = decode(token);
    console.log(userRole.role);

    switch (userRole) {
      case "storeOwner":
        console.log("alaki");

        break;

      case "user":
        console.log("malaki");
        break;

      default:
        console.log("palaki");
        break;
    }
  };

  componentDidMount = async () => {
    this.getUserRole();
  };

  render() {
    const {
      auth,
      navigation,
      renderIcon,
      activeTintColor,
      inactiveTintColor
    } = this.props;

    const { routes } = navigation.state;

    const ignoreScreen = [
      "DetailScreen",
      "SearchScreen",
      "Detail",
      "NewsScreen",
      "LoginScreen",
      "SignUpScreen",
      "CustomPage",
      "CategoryDetail",
      "SettingScreen",
      "WishListScreen",
      "LoginStack",
      "Comment",
      "Address"
    ];

    const storeIgnoreScreen = [
      "DetailScreen",
      "SearchScreen",
      "Detail",
      "NewsScreen",
      "LoginScreen",
      "SignUpScreen",
      "CustomPage",
      "CategoryDetail",
      "SettingScreen",
      "WishListScreen",
      "LoginStack",
      // "Comment",
      "Address"
    ];

    return (
      <View
        style={[
          styles.tabbar,
          { backgroundColor: "#fff", borderTopColor: "#fff" }
        ]}
      >
        {routes &&
          routes.map((route, index) => {
            const focused = index === navigation.state.index;
            const tintColor = focused ? activeTintColor : inactiveTintColor;

            // if (this.userRole === "storeOwner") {
            //   storeIgnoreScreen.indexOf(route.key) > -1;
            //   <View key={route.key} />;
            // } else {
            //   ignoreScreen.indexOf(route.key) > -1;
            //   <View key={route.key} />;
            // }

            // if (ignoreScreen.indexOf(route.key) > -1) {
            //   return <View key={route.key} />;
            // }

            return (
              <TouchableWithoutFeedback
                key={route.key}
                style={styles.tab}
                onPress={() => this.onPress(index, route)}
              >
                <Animatable.View ref={`tabItem${index}`} style={styles.tab}>
                  {renderIcon({
                    route,
                    index,
                    focused,
                    tintColor
                  })}
                </Animatable.View>
              </TouchableWithoutFeedback>
            );
          })}
      </View>
    );
  }
}

TabBar.propTypes = {
  user: PropTypes.object,
  navigation: PropTypes.object,
  renderIcon: PropTypes.any,
  activeTintColor: PropTypes.string,
  inactiveTintColor: PropTypes.string,
  jumpTo: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(TabBar);
