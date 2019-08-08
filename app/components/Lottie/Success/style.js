import styled from "styled-components";
import { Animated, Platform } from "react-native";
import Color from "../../../config/settings/color";

export const Container = styled.View`
  ${Platform.select({
    ios: {
      flex: 0.38
    },
    android: {
      flex: 1,
      width: "40%",
      justifyContent: "center",
      marginBottom: 128
    }
  })}
  align-items: center;
  justify-content: center;
  margin-top: -200px;
  background-color: ${Color.mainWhiteColorWithOpacity};
`;

export const AnimatedContainer = Animated.createAnimatedComponent(Container);
