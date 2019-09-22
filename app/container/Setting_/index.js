import {
  Text,
  HLine,
  Button,
  SubText,
  EditView,
  Container,
  ButtonText,
  Description,
  NormalInput,
  NormalInput2,
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
import Colors from "../../config/settings/color";
import Const from "../../config/settings/Constants";
import Language from "../../config/settings/Language";
import Constants from "../../config/settings/Constants";
import ImagePicker from "../../components/ImagePicker";
import {
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  View
} from "react-native";

const { height, width } = Dimensions.get("window");

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
      <ScrollView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <ImagePicker submitImage={this.submitImage}>
            {store.store.photo ? (
              <View
                style={{
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2
                  },
                  shadowOpacity: 0.23,
                  shadowRadius: 2.62,

                  elevation: 3
                }}
              >
                <Image
                  style={{
                    backgroundColor: "red",
                    width: width > 360 ? 120 : 100,
                    height: height > 600 ? 120 : 100,
                    borderRadius: width > 360 ? 60 : 50
                  }}
                  source={{ uri: photo }}
                />
              </View>
            ) : (
              <Image
                style={{
                  width: width > 360 ? 120 : 100,
                  height: height > 600 ? 120 : 100,
                  borderRadius: width > 360 ? 60 : 50
                }}
                source={require("../../../assets/image/mobl.jpeg")}
              />
            )}
            <EditView
              style={{
                left: width / 50,
                bottom: height / 145,
                position: "absolute",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <AntDesign
                name="edit"
                size={width / 20}
                color={Colors.Alternative}
              />
            </EditView>
          </ImagePicker>
        </View>
        <BoxContainer>
          <MaterialIcons
            name="store"
            size={width / 14}
            color={Colors.Alternative}
            style={{
              marginRight: width / 20,
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
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row-reverse"
          }}
        >
          <HLine style={{ marginTop: -width / 80 }} />
        </View>

        <BoxContainer>
          <Foundation
            name="clipboard-pencil"
            size={width / 14}
            color={Colors.Alternative}
            style={{
              marginRight: width / 20,
              alignItems: "center",
              justifyContent: "center"
            }}
          />
          <Text>{Language.BusinessDescription}</Text>
          <NormalInput2
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
        <View
          style={{
            flexDirection: "row-reverse",
            justifyContent: "center",
            alignItems: "center",
            flex: 1
          }}
        >
          <HLine />
        </View>

        <BoxContainer style={{ marginTop: width / 15 }}>
          <Entypo
            name="address"
            size={width / 14}
            color={Colors.Alternative}
            style={{
              marginRight: width / 20,
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
            right: "23%",
            marginTop: width / 50,
            bottom: "-20%",
            position: "absolute"
          }}
          onPress={this.handleStoreUpdateDetails}
        >
          <Button>
            <ButtonText>{Language.UpdateStore}</ButtonText>
          </Button>
        </TouchableOpacity>
      </ScrollView>
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
