import {
  Container,
  StoreText,
  Image,
  MainContainer,
  ButtonText,
  Button
} from "./style";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import StoreMainScreenComponent from "../MainScreen";
import Language from "../../../config/settings/Language";
import { getProfileById } from "../../../redux/Actions/profile";
import { TouchableOpacity, View, ActivityIndicator } from "react-native";

const Store = ({
  auth,
  profile: { profile, loading },
  getProfileById,
  navigation
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
          source={require("../../../../assets/image/store-compressed-final-farsi.png")}
        />
        <StoreText>{Language.StoreWelcomeText}</StoreText>

        <TouchableOpacity onPress={() => navigate("StoreRegistration")}>
          <Button>
            <ButtonText>ثبت کسب و کار</ButtonText>
          </Button>
        </TouchableOpacity>
      </MainContainer>
    ) : (
      <StoreMainScreenComponent navigation={navigation} />
    );

  return <Container>{userDetector}</Container>;
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfileById }
)(Store);
