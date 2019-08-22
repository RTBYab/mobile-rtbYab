import { connect } from "react-redux";
import Map from "../../components/Map";
import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import Language from "../../config/settings/Language";
import { createStore } from "../../redux/Actions/storeAction";
import {
  DetailForm,
  TitleBar,
  MainContainer,
  Text,
  SubText,
  Button,
  ButtonText
} from "./style";

class FirstRegistration extends Component {
  state = {
    name: "",
    description: "",
    location: {
      coordinates: null,
      type: "Point",
      valid: false
    }
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
        location.coordinates.latitude
      ],
      "location.type": "Point"
    };
    createStore({ storeData, navigation, id, token });
  };

  handleLocationPicker = location => {
    this.setState({
      location: {
        coordinates: location,
        // type: "Point",
        valid: true
      }
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
        >
          <Ionicons
            name="ios-arrow-round-back"
            size={65}
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
        <Text>{Language.BusinessName}</Text>

        <TitleBar
          maxLength={30}
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          scrollEnabled={true}
          underlineColorAndroid="#fff"
          placeholder=" تابلو فرش و گلیم مریم "
          onChangeText={name => this.setState({ name })}
        />

        <Text>{Language.BusinessDescription}</Text>

        <DetailForm
          maxLength={130}
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          scrollEnabled={true}
          underlineColorAndroid="#fff"
          placeholder="فروشگاه  خانگی مریم با قبول سفارشات شما در زمینه تابلو فرش و بافتنی های سنتی همیشه اماده ارائه بهترین خدمات به مشتریان و دوستان عزیز می باشد"
          onChangeText={description => this.setState({ description })}
        />

        <Map
          locationPicker={this.handleLocationPicker}
          navigation={navigation}
        />
        <TouchableOpacity
          onPress={this.handleCreateStore}
          disabled={!this.state.location.valid}
        >
          <SubText>{Language.MapNotice}</SubText>
          <Button>
            <ButtonText>{Language.CreateStore}</ButtonText>
          </Button>
        </TouchableOpacity>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { createStore }
)(FirstRegistration);
