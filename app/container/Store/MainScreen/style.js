import styled from "styled-components";
import { Animated, Dimensions } from "react-native";
import Colors from "../../../config/settings/color";
import Constants from "../../../config/settings/Constants";

const { width, height } = Dimensions.get("window");

export const Container = styled.SafeAreaView`
  flex: 1;
  /* align-items: center; */
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const MainImage = styled.Image`
  margin-top: ${height > 600 ? 10 : 8};
  width: ${width > 375 ? 120 : 100};
  height: ${width > 375 ? 120 : 100};
  border-radius: ${width > 375 ? 60 : 50};
`;

export const Text = styled.Text`
  font-size: 16px;
  font-family: Main;
  align-self: center;
`;

export const RootView = styled.View`
  flex: 1;
  background: #000;
`;

export const IconContainer = styled.View`
  right: 0px;
  top: ${width / 15};
  position: absolute;
  width: ${width / 5};
  height: ${height / 14};
  flex-direction: row-reverse;
  box-shadow: 1px 1px 3px #8888;
  border-radius: ${width / 10};
  background: ${Colors.mainWhite};
  border-top-right-radius: ${width / 50};
  border-bottom-right-radius: ${width / 50};
`;
