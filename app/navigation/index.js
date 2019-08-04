import React from "react";
import { Dimensions, I18nManager, StyleSheet } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
  // NavigationActions
} from "react-navigation";

const { width } = Dimensions.get("window");

import Images from "../config/settings/Images";
import Config from "../config/settings/general-config";
import color from "../config/settings/color";
import TabBarIcon from "../components/TabbarIcon";
import HomeScreen from "../screens/HomeScreen";
import WishListScreen from "../screens/WishListScreen";
import DetailsScreen from "../screens/DetailsScreen";
import SearchScreen from "../components/Search";
import ResultScreen from "../screens/ResultScreen";
import CouponScreen from "../screens/CouponScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterationScreen from "../screens/RegisterationScreen";

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Result: { screen: ResultScreen }
  },
  {
    navigationOptions: {
      gestureResponseDistance: { horizontal: width / 2 },
      gesturesEnabled: true,
      gestureDirection: I18nManager.isRTL ? "inverted" : "default"
    }
  }
);

const AuthStack = createStackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    RegisterationScreen: { screen: RegisterationScreen }
  },
  {
    mode: "card",
    header: null
  }
);

const CouponStack = createStackNavigator({
  Wish: { screen: WishListScreen },
  Copon: { screen: CouponScreen }
});

const AppNavigator = createBottomTabNavigator(
  {
    خانه: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            css={{ width: 18, height: 18 }}
            icon={Images.IconHome}
            tintColor={tintColor}
          />
        )
      }
    },
    جایزهـها: {
      screen: CouponStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            css={{ width: 18, height: 18 }}
            icon={Images.IconCategory}
            tintColor={tintColor}
          />
        )
      }
    }
  },
  {
    // initialRouteName: 'CategoriesScreen',
    // tabBarComponent: TabBar,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      activeTintColor: color.tabbarTint,
      inactiveTintColor: color.tabbarColor
    },
    lazy: true,
    navigationOptions: {
      gestureDirection: I18nManager.isRTL ? "inverted" : "default"
    }
  }
);

export default createAppContainer(
  Config.Login.RequiredLogin
    ? createSwitchNavigator(
        {
          AuthLoading: AuthLoadingScreen,
          App: AppNavigator,
          Auth: AuthStack
        },
        {
          initialRouteName: "AuthLoading"
        }
      )
    : AppNavigator
);
