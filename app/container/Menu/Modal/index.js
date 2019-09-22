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

const { height, width } = Dimensions.get("window");

class Modal extends Component {
  state = {
    top: new Animated.Value(height)
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
        toValue: height
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
              name="ios-close"
              size={width / 6.5}
              color={Colors.blackColor}
              style={{ marginTop: -width / 70 }}
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
                icon={item.icon}
                size={width / 10}
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
