import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator
  // NavigationActions
} from "react-navigation";
import React from "react";
import TabBar from "../components/TabBar";
const { width } = Dimensions.get("window");
import color from "../config/settings/color";
import MapScreen from "../screens/MapScreen";
import HomeScreen from "../screens/HomeScreen";
import Images from "../config/settings/Images";
import SearchScreen from "../components/Search";
import LoginScreen from "../screens/LoginScreen";
import StoreScreen from "../screens/StoreScreen";
import TabBarIcon from "../components/TabBarIcon";
import ResultScreen from "../screens/ResultScreen";
import CouponScreen from "../screens/CouponScreen";
import AddressScreen from "../screens/AddressScreen";
import EditPostScreen from "../screens/EditPostScreen";
import CommentScreen from "../screens/CommentsScreen";
import SettingScreen from "../screens/SettingsScreen";
import WishListScreen from "../screens/WishListScreen";
import { Dimensions, I18nManager } from "react-native";
import Config from "../config/settings/general-config";
import AddNewPostScreen from "../screens/AddNewPostScreen";
import PostDetailsScreen from "../screens/PostDetailsScreen";
import EditAddressScreen from "../screens/EditAddressScreen";
import RegistrationScreen from "../screens/RegistrationScreen";
import StoreCommentDetails from "../screens/StoreCommentDetails";
import ContinuCommentScreen from "../screens/ContinuCommentScreen";
import StoreRegistrationScreen from "../screens/StoreRegistrationScreen";

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
  Setting: { screen: SettingScreen }
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
    AddNewPost: {
      screen: AddNewPostScreen
    },
    Address: {
      screen: AddressScreen
    },
    EditAddress: {
      screen: EditAddressScreen
    },
    MapScreen: {
      screen: MapScreen
    },
    StoreCommentDetails: {
      screen: StoreCommentDetails
    },
    PostDetails: {
      screen: PostDetailsScreen
    },
    EditPost: {
      screen: EditPostScreen
    },
    ContinueComment: {
      screen: ContinuCommentScreen
    }
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
