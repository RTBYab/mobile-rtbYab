import {
  View,
  Image,
  Easing,
  Animated,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Follow from "../../Follow";
import Modal from "../../Menu/Modal";
import { connect } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import Colors from "../../../config/settings/color";
import Images from "../../../config/settings/Images";
import StoreText from "../../../components/StoreText";
import Const from "../../../config/settings/Constants";
import { openMenu } from "../../../redux/Actions/modalMenu";
import { MainImage, IconContainer, AnimatedContainer } from "./style";
import { getStoreByStoreOwner } from "../../../redux/Actions/storeAction";

const { width, height } = Dimensions.get("window");

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
    <SafeAreaView style={{ flex: 1 }}>
      {store === null || loading ? (
        <View>
          <ActivityIndicator size="large" color={Colors.Alternative} />
        </View>
      ) : (
        <AnimatedContainer style={{ transform: [{ scale }], opacity }}>
          <Modal navigation={navigation} />
          <View style={{ flex: 1, alignItems: "center", marginBottom: 5 }}>
            <IconContainer style={{ elevation: 2 }}>
              <TouchableOpacity
                style={{ justifyContent: "center", alignItems: "center" }}
                onPress={openMenu}
              >
                <Ionicons
                  name="ios-menu"
                  size={width / 10}
                  style={{
                    marginRight: width / 20,
                    textAlign: "right"
                  }}
                />
              </TouchableOpacity>
            </IconContainer>
            <View style={{ alignItems: "center", marginBottom: width / 50 }}>
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

            <View style={stylesInLine.buttomsContainer}>
              <View>
                <Follow />
              </View>

              {/* <View>
                <Follow />
              </View> */}
            </View>

            <StoreText
              tel={store.tel}
              rate={store.rate}
              navigation={navigation}
              address={store.address}
              comments={store.comments}
              followers={user.following}
              description={store.description}
            />
          </View>
        </AnimatedContainer>
      )}
      <View style={stylesInLine.View}>
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            navigation.navigate("AddNewPost");
          }}
        >
          <Image source={Images.IconAddPen} style={{ width: 38, height: 38 }} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const stylesInLine = StyleSheet.create({
  View: {
    flex: 1,
    right: 30,
    width: 60,
    height: 60,
    bottom: 115,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignItems: "center",
    position: "absolute",
    justifyContent: "center",
    backgroundColor: Colors.mainWhite
  },
  follow: {
    width: "90%",
    height: "3.2%",
    marginBottom: "2.3%",
    alignItems: "flex-start"
  },
  buttomsContainer: {
    width: "95%",
    alignItems: "center",
    marginBottom: height / 150,
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store,
  modalMenu: state.modalMenu.isMenuOpen
});

export default connect(
  mapStateToProps,
  { getStoreByStoreOwner, openMenu }
)(StoreMainScreenComponent);
