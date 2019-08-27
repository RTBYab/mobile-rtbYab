import Modal from "../../Menu/Modal";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MainImage, AnimatedContainer, IconContainer } from "./style";
import { Text, TouchableOpacity, Animated, Easing, View } from "react-native";
import { getStoreByStoreOwner } from "../../../redux/Actions/storeAction";
import { openMenu } from "../../../redux/Actions/modalMenu";

const StoreMainScreenComponent = ({
  store: { store, loading },
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
      {store === null || loading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Modal navigation={navigation} />
          <IconContainer>
            <TouchableOpacity onPress={openMenu}>
              <Ionicons
                name="ios-menu"
                size={30}
                style={{
                  marginTop: 7,
                  marginRight: 18,
                  textAlign: "right",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              />
            </TouchableOpacity>
          </IconContainer>

          <MainImage
            source={
              require("../../../../assets/image/mobl.jpeg") ||
              store.store.picture
            }
          />

          {/* {store.store.name && <Text>{store.store.name}</Text>}

          {store.store.description && <Text>{store.store.description}</Text>} */}
        </View>
      )}
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
