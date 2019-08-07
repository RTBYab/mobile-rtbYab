import { Container } from "./style";
import React, { Component } from "react";
import LottieView from "lottie-react-native";
import { Animated, Dimensions } from "react-native";

const HEIGTH = Dimensions.get("window").height;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

class Success extends Component {
  state = {
    top: new Animated.Value(0),
    opacity: new Animated.Value(0)
  };

  componentDidMount() {
    const { top, opacity } = this.state;
    const { isActive } = this.props;

    if (isActive) {
      Animated.timing(top, { toValue: 0, duration: 0 }).start();
      Animated.timing(opacity, { toValue: 1 }).start();
      this.animation.play();
    } else {
      Animated.timing(top, { toValue: HEIGTH, duration: 0 }).start();
      Animated.timing(opacity, { toValue: 0 }).start();
      this.animation.loop = false;
    }
  }

  render() {
    const { top, opacity } = this.state;
    return (
      <AnimatedContainer style={{ top, opacity }}>
        <LottieView
          loop={false}
          autoPlay={false}
          ref={animation => {
            this.animation = animation;
          }}
          source={require("../../../../assets/lottie/Unlock.json")}
        />
      </AnimatedContainer>
    );
  }
}
export default Success;
