import {
  AnimatedContainer,
  Cover,
  Content,
  CloseView,
  Title,
  Image
} from "./style";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../../config/settings/color";
import { logout } from "../../../redux/Actions/auth";
import Items from "../../../components/MenuItems/Items";
import { closeMenu } from "../../../redux/Actions/modalMenu";
import { TouchableOpacity, Animated, Dimensions } from "react-native";

import { persistStore } from "redux-persist";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class Modal extends Component {
  state = {
    top: new Animated.Value(SCREEN_HEIGHT)
  };

  componentDidMount() {
    this.toggleMenu();
  }

  componentDidUpdate() {
    this.toggleMenu();
  }

  toggleMenu = () => {
    if (this.props.modalMenu === true) {
      Animated.spring(this.state.top, {
        toValue: 15
      }).start();
    } else {
      Animated.spring(this.state.top, {
        toValue: SCREEN_HEIGHT
      }).start();
    }
  };

  handleMenu = index => {
    const { navigation, logout } = this.props;
    switch (index) {
      case 0:
        navigation.navigate("Setting");
        break;
      case 1:
        logout();
        // persistStore().purge();
        navigation.navigate("Login");
        break;
    }
  };

  render() {
    const { top } = this.state;
    const { store } = this.props;
    return (
      <AnimatedContainer style={{ top }}>
        <Cover>
          <Image
            source={require("../../../../assets/image/background-menu.png")}
          >
            <Title>{store.store.name}</Title>
          </Image>
        </Cover>
        <TouchableOpacity
          onPress={this.props.closeMenu}
          style={{
            top: 120,
            left: "50%",
            zIndex: 1,
            marginLeft: -22,
            position: "absolute"
          }}
        >
          <CloseView>
            <Ionicons
              size={60}
              name="ios-close"
              color={Colors.blackColor}
              style={{ marginTop: -7 }}
            />
          </CloseView>
        </TouchableOpacity>
        <Content>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                this.handleMenu(index);
              }}
            >
              <Items
                size={38}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                color={Colors.Alternative}
              />
            </TouchableOpacity>
          ))}
        </Content>
      </AnimatedContainer>
    );
  }
}

const mapStateToProps = state => ({
  store: state.store,
  modalMenu: state.modalMenu.isMenuOpen
});
export default connect(
  mapStateToProps,
  { closeMenu, logout }
)(Modal);

const items = [
  {
    icon: "ios-settings",
    title: "تنظیمات",
    subtitle: "فروشگاه من"
  },

  {
    icon: "ios-exit",
    title: "خروج",
    subtitle: "به امید دیدار"
  }
];
