import styled from "styled-components";
import { Animated, Dimensions } from "react-native";
import Colors from "../../../config/settings/color";

const SCREEN_HEIGHT = Dimensions.get("window").height;

export const Container = styled.View`
  z-index: 100;
  width: 100%;
  height: 100%;
  position: absolute;
  background: ${Colors.mainWhite};
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const Cover = styled.View`
  height: 142px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background: ${Colors.Alternative};
`;

export const Content = styled.View`
  flex: 1;
  padding: 15px;
  height: ${SCREEN_HEIGHT};
  background: ${Colors.whiteSmoke};
`;

export const CloseView = styled.View`
  width: 44px;
  height: 44px;
  align-items: center;
  border-radius: 22px;
  justify-content: center;
  background: ${Colors.whiteSmoke};
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

export const Title = styled.Text`
  font-size: 28px;
  font-family: Main2;
  text-align: center;
  color: ${Colors.mainWhite};
`;

export const Image = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
