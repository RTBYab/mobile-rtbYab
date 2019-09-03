import styled from "styled-components";
import { Animated } from "react-native";
import Colors from "../../../config/settings/color";
import Constants from "../../../config/settings/Constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const MainImage = styled.Image`
  height: 110px;
  width: 110px;
  margin-top: 15px;
  border-radius: ${Constants.borderRadius.storeImage};
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
  top: 40px;
  width: 60px;
  height: 40px;
  position: absolute;
  border-radius: 20px;
  flex-direction: row-reverse;
  border-top-right-radius: 5px;
  box-shadow: 1px 1px 5px #8888;
  background: ${Colors.mainWhite};
  border-bottom-right-radius: 5px;
`;
