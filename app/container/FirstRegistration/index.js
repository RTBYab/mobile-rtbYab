import { connect } from "react-redux";
import React, { Component } from "react";
import Map from "../Map/FirstRegistration";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Constants from "../../config/settings/Constants";
import Language from "../../config/settings/Language";
import { createStore } from "../../redux/Actions/storeAction";
import {
  DetailForm,
  TitleBar,
  MainContainer,
  Text,
  SubText,
  Button,
  ButtonText,
} from "./style";

import AInputField from "../../components/InputField";
import AButton from "../../components/Button";

class FirstRegistration extends Component {
  state = {
    name: "",
    description: "",
    location: {
      coordinates: null,
      type: "Point",
      valid: false,
    },
  };

  handleCreateStore = () => {
    const { name, description, location } = this.state;
    const { createStore, navigation, auth } = this.props;
    const { token, user } = auth;
    const id = user._id;

    const storeData = {
      name,
      description,
      "location.coordinates": [
        location.coordinates.longitude,
        location.coordinates.latitude,
      ],
      "location.type": "Point",
    };
    createStore({ storeData, navigation, id, token });
  };

  handleLocationPicker = (location) => {
    this.setState({
      location: {
        coordinates: location,
        valid: true,
      },
    });
  };

  //  buttonValid =(
  //   if(!this.state.location.valid)
  // )

  render() {
    const { navigation } = this.props;
    return (
      <MainContainer>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            width: 50,
            height: 50,
            zIndex: 10,
            marginTop: 35,
            backgroundColor: "#ccc",
          }}
        >
          <Ionicons
            style={{ marginLeft: 10 }}
            name="ios-arrow-round-back"
            size={Constants.icon.backIconSize}
          />
        </TouchableOpacity>
        <Text>{Language.BusinessName}</Text>

        <AInputField
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          scrollEnabled={true}
          maxLength={30}
          isRequired={true}
          // source={mobileIcon}
          // onFocus={onFocusMobile}
          underlineColorAndroid="#fff"
          placeholder=" نام کسب و کار حداکثر در ۳۰ حرف "
          onChangeText={(name) => this.setState({ name })}
          inputStyle={{
            width: "160%",
            // padding: 10,
            textAlign: "right",
            // backgroundColor: "blue",
          }}
        />
        <Text style={{ marginTop: -20, marginBottom: 45 }}>
          {Language.BusinessDescription}
        </Text>

        <AInputField
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          scrollEnabled={true}
          maxLength={150}
          isRequired={true}
          // keyboardType="text"
          numberOfLines={8}
          // source={mobileIcon}
          // onFocus={onFocusMobile}
          underlineColorAndroid="#fff"
          placeholder="معرفی درباره کسب و کار حداکثر در ۱۵۰ حرف"
          onChangeText={(description) => this.setState({ description })}
          inputStyle={{
            width: "160%",
            padding: 30,
            textAlign: "right",
            // marginTop: 300,
            // backgroundColor: "blue",
          }}
        />
        <SubText>{Language.MapNotice}</SubText>
        <Map
          locationPicker={this.handleLocationPicker}
          navigation={navigation}
        />
        <TouchableOpacity
          style={{
            // flex: 0.2,
            // backgroundColor: "red",
            justifyContent: "center",
            alignSelf: "center",
            alignItems: "center",
            marginBottom: "4%",
          }}
        >
          <AButton
            onPress={this.handleCreateStore}
            buttonTitle={Language.CreateStore}
            disabled={!this.state.location.valid}
            bStyle={{ width: "25%", marginTop: "6%", marginBottom: "4%" }}
            tStyle={{ fontSize: 16 }}
          />
        </TouchableOpacity>
      </MainContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { createStore })(FirstRegistration);
