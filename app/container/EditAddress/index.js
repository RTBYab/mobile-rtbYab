import {
  Text,
  HLine,
  Button,
  SubText,
  Container,
  MiniInput,
  ButtonText,
  NormalInput,
  BoxContainer,
  AlterLine
} from "./style";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Map from "../Map";
import React, { PureComponent } from "react";
import Colors from "../../config/settings/color";
import { TouchableOpacity, View, Dimensions } from "react-native";
import Language from "../../config/settings/Language";
import Constants from "../../config/settings/Constants";
import { Entypo, Foundation, Ionicons } from "@expo/vector-icons";
import { updateStore } from "../../redux/Actions/storeAction";

const { height, width } = Dimensions.get("window");

class EditAddress extends PureComponent {
  state = {
    address: this.props.store.store.address,
    tel: this.props.store.store.tel,
    mobile: this.props.store.store.mobile,
    location: {
      coordinates: this.props.store.store.location.coordinates,
      type: "Point",
      valid: false
    }
  };

  handleLocationPicker = location => {
    this.setState({
      location: {
        coordinates: location,
        valid: true
      }
    });
  };

  onPressHandler = async () => {
    const { address, tel, mobile, location } = this.state;
    const { updateStore, navigation, auth, store } = this.props;
    const { token } = auth;

    const id = store.store._id;

    const storeData = {
      address,
      tel,
      mobile,
      "location.coordinates": [
        location.coordinates.longitude ||
          this.props.store.store.location.coordinates[0],
        location.coordinates.latitude ||
          this.props.store.store.location.coordinates[1]
      ],
      "location.type": "Point"
    };
    await updateStore({ storeData, navigation, id, token });
  };

  render() {
    const { store, navigation } = this.props;
    return (
      <Container>
        <TouchableOpacity
          style={{ position: "absolute", left: 0 }}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons
            style={{ marginLeft: 15 }}
            name="ios-arrow-round-back"
            size={width / 8}
          />
        </TouchableOpacity>
        <BoxContainer style={{ marginTop: 50 }}>
          <Entypo
            size={width < 375 ? 20 : 25}
            name="location"
            color={Colors.Alternative}
            style={{
              marginRight: 25,
              alignItems: "center",
              justifyContent: "center"
            }}
          />
          <Text>{Language.EditAddress}</Text>
          <NormalInput
            multiline={true}
            spellCheck={false}
            autoCorrect={false}
            scrollEnabled={true}
            // style={{ padding: 20 }}
            defaultValue={store.store.address}
            maxLength={Constants.textInput.address}
            underlineColorAndroid={Colors.mainWhite}
            onChangeText={address => this.setState({ address })}
            placeholder="آدرس در حداکثر ۱۰۰ کلمه"
          />
        </BoxContainer>
        <HLine style={{ marginTop: height > 600 ? -20 : -23 }} />
        <BoxContainer>
          <Foundation
            size={width < 375 ? 20 : 25}
            name="telephone"
            color={Colors.Alternative}
            style={{
              marginRight: 25,
              alignItems: "center",
              justifyContent: "center"
            }}
          />
          <Text>{Language.Telephone}</Text>
          <MiniInput
            spellCheck={false}
            autoCorrect={false}
            keyboardType="number-pad"
            style={{ paddingRight: 20 }}
            defaultValue={store.store.tel}
            maxLength={Constants.textInput.telephone}
            underlineColorAndroid={Colors.mainWhite}
            onChangeText={tel => this.setState({ tel })}
            placeholder="شماره تلفن ثابت "
          />
        </BoxContainer>

        <AlterLine />

        <SubText style={{ paddingRight: 30, marginTop: 10 }}>
          {Language.MapNotice}
        </SubText>
        <Map
          show={true}
          navigation={navigation}
          showsUserLocation={true}
          locationPicker={this.handleLocationPicker}
        />
        <View style={{ alignItems: "center", marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity onPress={this.onPressHandler}>
            <Button>
              <ButtonText>{Language.UpdateStore}</ButtonText>
            </Button>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

// EditAddress.propTypes = {
//   region: PropTypes.array.isRequired
// };

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});
export default connect(
  mapStateToProps,
  { updateStore }
)(EditAddress);
