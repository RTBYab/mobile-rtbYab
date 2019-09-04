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

import StoreRegistrationScreen from "../screens/StoreRegistrationScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import EditAddressScreen from "../screens/EditAddressScreen";
import AddNewPostScreen from "../screens/AddNewPostScreen";
import Config from "../config/settings/general-config";
import WishListScreen from "../screens/WishListScreen";
import SettingScreen from "../screens/SettingsScreen";
import CommentScreen from "../screens/CommentsScreen";
import AddressScreen from "../screens/AddressScreen";
import CouponScreen from "../screens/CouponScreen";
import ResultScreen from "../screens/ResultScreen";
import TabBarIcon from "../components/TabBarIcon";
import StoreScreen from "../screens/StoreScreen";
import LoginScreen from "../screens/LoginScreen";
import SearchScreen from "../components/Search";
import Images from "../config/settings/Images";
import HomeScreen from "../screens/HomeScreen";
import color from "../config/settings/color";
import TabBar from "../components/TabBar";

const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Search: { screen: SearchScreen },
    Result: { screen: ResultScreen },
    Store: { screen: StoreScreen }
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
    Login: { screen: LoginScreen },
    Registration: { screen: RegistrationScreen }
  },
  {
    mode: "card",
    header: null
  }
);

const StoreStack = createStackNavigator({
  Wish: { screen: WishListScreen },
  Copon: { screen: CouponScreen },
  StoreRegistration: { screen: StoreRegistrationScreen },
  Setting: { screen: SettingScreen },
  AddNewPost: { screen: AddNewPostScreen },
  EditAddress: {
    screen: EditAddressScreen,
    navigationOptions: {
      tabBarVisible: false
    }
  }
});

const AppNavigator = createBottomTabNavigator(
  {
    خانه: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            css={{ width: 25, height: 25 }}
            icon={Images.IconSearch}
            tintColor={tintColor}
            name="جابزه ها"
            textLabel="asd"
          />
        )
      }
    },
    جایزهـها: {
      screen: StoreStack,

      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <TabBarIcon
            css={{ width: 27, height: 27 }}
            icon={Images.IconStore}
            tintColor={tintColor}
            name="[sdsdsds]"
            textLabel="asd"
          />
        )
      }
    },
    Comment: {
      screen: CommentScreen
    },
    Address: { screen: AddressScreen }
  },
  {
    initialRouteName: "جایزهـها",
    tabBarComponent: TabBar,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: true,
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
          AuthLoading: LoginScreen,
          App: AppNavigator,
          Auth: AuthStack
        },
        {
          initialRouteName: "AuthLoading"
        }
      )
    : AppNavigator
);
