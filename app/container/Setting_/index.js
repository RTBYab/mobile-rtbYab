import {
  Text,
  HLine,
  Image,
  Button,
  SubText,
  EditView,
  Container,
  ButtonText,
  Description,
  NormalInput,
  BoxContainer,
  MiniContainer,
  MainContainer
} from "./style";
import {
  Entypo,
  AntDesign,
  Foundation,
  MaterialIcons
} from "@expo/vector-icons";
import {
  updateStoreDetails,
  uploadStoreImage
} from "../../redux/Actions/storeAction";
import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native";
import Colors from "../../config/settings/color";
import Const from "../../config/settings/Constants";
import ToggleSwitch from "toggle-switch-react-native";
import Language from "../../config/settings/Language";
import Constants from "../../config/settings/Constants";
import ImagePicker from "../../components/ImagePicker";

class SettingsSection extends React.PureComponent {
  state = {
    name: this.props.store.store.name,
    description: this.props.store.store.description,
    photo:
      Const.URL.Image +
      `${this.props.auth.user._id}/${this.props.store.store.photo}`
  };

  submitImage = async imagePath => {
    this.setState({ photo: imagePath });
    const { auth, store, uploadStoreImage } = this.props;
    const { photo } = this.state;
    const { token } = auth;
    const id = store.store._id;

    await uploadStoreImage({ id, token, photo });
  };
  handleStoreUpdateDetails = async () => {
    const { name, description } = this.state;
    const { auth, store, navigation, updateStoreDetails } = this.props;

    const { token } = auth;
    const id = store.store._id;

    const storeData = {
      name,
      description
    };
    await updateStoreDetails({ storeData, navigation, id, token });
  };

  render() {
    const { store, navigation } = this.props;
    const { photo } = this.state;
    return (
      <MainContainer>
        <Container>
          <MiniContainer style={{ alignItems: "center", marginTop: 2 }}>
            <ImagePicker submitImage={this.submitImage}>
              {store.store.photo ? (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={{ uri: photo }}
                />
              ) : (
                <Image
                  style={{ width: 100, height: 100 }}
                  source={require("../../../assets/image/mobl.jpeg")}
                />
              )}

              <EditView
                style={{
                  left: 9,
                  bottom: 10,
                  position: "absolute",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <AntDesign size={20} name="edit" color={Colors.Alternative} />
              </EditView>
            </ImagePicker>
          </MiniContainer>
          <BoxContainer>
            <MaterialIcons
              size={25}
              name="store"
              color={Colors.Alternative}
              style={{
                marginRight: 25,
                alignItems: "center",
                justifyContent: "center"
              }}
            />
            <Text>{Language.BusinessName}</Text>

            <NormalInput
              autoCorrect={false}
              spellCheck={false}
              defaultValue={store.store.name}
              maxLength={Constants.textInput.name}
              underlineColorAndroid={Colors.mainWhite}
              onChangeText={name => this.setState({ name })}
              placeholder="نام در حداکثر ۲۰ کلمه"
            />
          </BoxContainer>
          <HLine />
          <BoxContainer>
            <Foundation
              size={25}
              name="clipboard-pencil"
              color={Colors.Alternative}
              style={{
                marginRight: 25,
                alignItems: "center",
                justifyContent: "center"
              }}
            />
            <Text>{Language.BusinessDescription}</Text>
            <Description
              multiline={true}
              spellCheck={false}
              autoCorrect={false}
              scrollEnabled={true}
              defaultValue={store.store.description}
              underlineColorAndroid={Colors.mainWhite}
              maxLength={Constants.textInput.description}
              placeholder="توضیحات در حداکثر ۱۵۰ کلمه"
              onChangeText={description => this.setState({ description })}
            />
          </BoxContainer>
          <HLine style={{ marginBottom: 12 }} />
          <BoxContainer style={{ width: "100%" }}>
            <Entypo
              size={25}
              name="address"
              color={Colors.Alternative}
              style={{
                marginRight: 25,
                alignItems: "center",
                justifyContent: "center"
              }}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("EditAddress");
              }}
            >
              <Text>{Language.EditBusinessAddress}</Text>
              <SubText>{Language.MapNotice}</SubText>
            </TouchableOpacity>
          </BoxContainer>

          <TouchableOpacity
            style={{
              right: "27%",
              marginTop: 25,
              bottom: "-35%",
              position: "absolute"
            }}
            onPress={this.handleStoreUpdateDetails}
          >
            <Button>
              <ButtonText>{Language.UpdateStore}</ButtonText>
            </Button>
          </TouchableOpacity>
        </Container>
      </MainContainer>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});
export default connect(
  mapStateToProps,
  { updateStoreDetails, uploadStoreImage }
)(SettingsSection);
