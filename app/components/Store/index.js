import { View } from "react-native";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import { logout } from "../../redux/Actions/auth";
import Language from "../../config/settings/Language";
import {
  Container,
  StoreText,
  Image,
  MainContainer,
  ButtonText,
  Button
} from "./style";
import { TouchableOpacity } from "react-native";
import { getProfileById } from "../../redux/Actions/profile";

const Store = ({
  auth,
  profile: { profile, loading },
  getProfileById,
  navigation,
  logout
}) => {
  const { token, user } = auth;
  const { navigate } = navigation;

  useEffect(() => {
    getProfileById(user._id, token);
  }, [getProfileById]);

  const userDetector =
    user.role !== "storeOwner" ? (
      <MainContainer>
        <Image
          source={require("../../../assets/image/store-compressed-final-farsi.png")}
        />
        <StoreText>{Language.StoreWelcomeText}</StoreText>

        <TouchableOpacity onPress={() => navigate("StoreRegistration")}>
          <Button>
            <ButtonText>ثبت کسب و کار</ButtonText>
          </Button>
        </TouchableOpacity>
      </MainContainer>
    ) : (
      <StoreText>خوش امدین</StoreText>
    );

  return <Container>{userDetector}</Container>;
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileById, logout }
)(Store);
