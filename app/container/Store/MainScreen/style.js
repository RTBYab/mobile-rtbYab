import styled from "styled-components";
import { Animated } from "react-native";
import Constants from "../../../config/settings/Constants";

export const Container = styled.SafeAreaView`
  flex: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const MainImage = styled.Image`
  height: 120px;
  width: 120px;
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
