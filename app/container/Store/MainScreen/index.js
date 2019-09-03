import {
  TouchableOpacity,
  Animated,
  Easing,
  View,
  ActivityIndicator
} from "react-native";
import Modal from "../../Menu/Modal";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import Colors from "../../../config/settings/color";
import StoreText from "../../../components/StoreText";
import Const from "../../../config/settings/Constants";
import { openMenu } from "../../../redux/Actions/modalMenu";
import { MainImage, IconContainer, AnimatedContainer } from "./style";
import { getStoreByStoreOwner } from "../../../redux/Actions/storeAction";

const StoreMainScreenComponent = ({
  store: { store, loading },
  auth,
  openMenu,
  modalMenu,
  navigation,
  getStoreByStoreOwner
}) => {
  const { token, user } = auth;
  const [scale] = useState(new Animated.Value(1));
  const [opacity] = useState(new Animated.Value(1));

  toggleMenu = () => {
    if (modalMenu === true) {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 100,
        easing: Easing.in()
      }).start();
    } else {
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        easing: Easing.in()
      }).start();
    }
  };

  useEffect(() => {
    getStoreByStoreOwner(user._id, token);
  }, [getStoreByStoreOwner, user._id, token]);

  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);

  return (
    <View style={{ flex: 1 }}>
      {store === null ? (
        <View>
          <ActivityIndicator size="large" color={Colors.Alternative} />
        </View>
      ) : (
        <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
          <Modal navigation={navigation} />
          <View style={{ flex: 1, alignItems: "center", marginBottom: 5 }}>
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
            {store.photo ? (
              <MainImage
                source={{
                  uri: Const.URL.Image + `${auth.user._id}/${store.photo}`
                }}
              />
            ) : (
              <MainImage
                source={require("../../../../assets/image/mobl.jpeg")}
              />
            )}
          </View>

          <StoreText
            rate={store.rate}
            comments={store.comments}
            followers={store.followers}
          />
        </AnimatedContainer>
      )}
    </View>
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
