import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { uploadStoreImage } from "../../redux/Actions/storeAction";

class ImageUploader extends Component {
  state = {
    image: null,
    uploading: false
  };

  render() {
    const { uploadStoreImage } = this.props;
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pickImage} title="انتخاب تصویر">
          {this.props.children}
        </TouchableOpacity>

        {this._maybeRenderImage()}
        {this._maybeRenderUploadingOverlay()}
      </View>
    );
  }

  _maybeRenderUploadingOverlay = () => {
    if (this.state.uploading) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.maybeRenderUploading]}>
          <ActivityIndicator color="#fff" size="large" />
        </View>
      );
    }
  };

  _maybeRenderImage = () => {
    let { image } = this.state;

    if (!image) {
      return;
    }

    return (
      <View style={styles.maybeRenderContainer}>
        <View style={styles.maybeRenderImageContainer}>
          <Image source={{ uri: image }} style={styles.maybeRenderImage} />
        </View>

        <Text
          onPress={this._copyToClipboard}
          onLongPress={this._share}
          style={styles.maybeRenderImageText}
        >
          {image}
        </Text>
      </View>
    );
  };

  _pickImage = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );

    if (cameraRollPerm === "granted") {
      let pickerResult = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true
        // aspect: [4, 3]
      });

      this._handleImagePicked(pickerResult);
    }
  };

  _handleImagePicked = async pickerResult => {
    let uploadResponse, uploadResult;

    try {
      this.setState({
        uploading: true
      });

      if (!pickerResult.cancelled) {
        uploadResponse = await uploadStoreImage(pickerResult.uri);
        uploadResult = await uploadResponse.json();
        this.setState({
          image: uploadResult.location
        });
      }
    } catch (e) {
      console.log({ uploadResponse });
      console.log({ uploadResult });
      console.log({ e });
      alert("در ارسال تصویر مشکلی پیش امده است لطفا بار دیگر تلاش کنید :(");
    } finally {
      this.setState({
        uploading: false
      });
    }
  };
}

// async function uploadImageAsync(uri, id) {
//   let apiUrl = `http://localhost:8080/api/store/updatephoto/${id}`;

//   let uriParts = uri.split(".");
//   let fileType = uriParts[uriParts.length - 1];

//   let formData = new FormData();
//   formData.append("photo", {
//     uri,
//     name: `photo.${fileType}`,
//     type: `image/${fileType}`
//   });

//   let options = {
//     method: "POST",
//     body: formData,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "multipart/form-data"
//     }
//   };

//   return fetch(apiUrl, options);
// }

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(
  mapStateToProps,
  { uploadStoreImage }
)(ImageUploader);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center"
  },
  exampleText: {
    fontSize: 20,
    marginBottom: 20,
    marginHorizontal: 15,
    textAlign: "center"
  },
  maybeRenderUploading: {
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center"
  },
  maybeRenderContainer: {
    borderRadius: 3,
    elevation: 2,
    marginTop: 30,
    shadowColor: "rgba(0,0,0,1)",
    shadowOpacity: 0.2,
    shadowOffset: {
      height: 4,
      width: 4
    },
    shadowRadius: 5,
    width: 250
  },
  maybeRenderImageContainer: {
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    overflow: "hidden"
  },
  maybeRenderImage: {
    height: 250,
    width: 250
  },
  maybeRenderImageText: {
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
