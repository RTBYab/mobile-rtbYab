import styled from "styled-components";
import { Animated } from "react-native";
import Color from "../../config/settings/color";

export const Container = styled.View`
  flex: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  position: absolute;
  background-color: ${Color.mainWhiteColorWithOpacity};
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);
