import Modal from "../../Menu/Modal";
import { Text, TouchableOpacity, Animated, Easing, View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Container, MainImage, AnimatedContainer, RootView } from "./style";
import { getStoreByStoreOwner } from "../../../redux/Actions/storeAction";
import { openMenu } from "../../../redux/Actions/modalMenu";

const StoreMainScreenComponent = ({
  store,
  auth,
  openMenu,
  modalMenu,
  navigation,
  getStoreByStoreOwner
}) => {
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));
  const { token, user } = auth;

  toggleMenu = () => {
    if (modalMenu === true) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 100,
        easing: Easing.in()
      }).start();
      // Animated.spring(opacity, {
      //   toValue: 0.5
      // }).start();
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        easing: Easing.in()
      }).start();
      // Animated.spring(opacity, {
      //   toValue: 1
      // }).start();
    }
  };

  useEffect(() => {
    getStoreByStoreOwner(user._id, token);
  }, [getStoreByStoreOwner]);

  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);

  return (
    <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
      <Modal navigation={navigation} />
      <TouchableOpacity onPress={openMenu}>
        <Ionicons
          name="ios-menu"
          size={32}
          style={{ textAlign: "right", margin: 5, marginRight: 15 }}
        />
      </TouchableOpacity>

      <MainImage
        source={
          store.store.picture || require("../../../../assets/image/mobl.jpeg")
        }
      />
      <Text>{store.store.name}</Text>
      <Text>{store.store.description}</Text>
    </AnimatedContainer>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store,
  modalMenu: state.modalMenu.isMenuOpen
});

export default connect(
  mapStateToProps,
  { getStoreByStoreOwner, openMenu }
)(StoreMainScreenComponent);
