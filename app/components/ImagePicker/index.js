import { Container, Title, Image } from "./style";
import React, { useState } from "react";
import * as Permissions from "expo-permissions";
import {
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  View,
  Text,
  StyleSheet
} from "react-native";
import * as ImagePicker from "expo-image-picker";

const imgPicker = ({ title, submitImage, children }) => {
  const [image, setImage] = useState();
  const [uploading, setUploading] = useState(false);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== "granted") {
      Alert.alert("دسترسی به گالری تصاویر میسر نشد :(", [{ text: "باشه" }]);
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 2],
      quality: 0.4
      // base64: true
    });
    setImage(res.uri);
    submitImage(res.uri);
  };

  return (
    <Container>
      <TouchableOpacity onPress={takeImageHandler}>
        {/* {!image ? (
          <View style={{ flex: 1 }}>
            <Image source={require("../../../assets/image/mobl.jpeg")} />
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            <Image source={{ uri: image }} />
          </View>
        )} */}
        {children}
      </TouchableOpacity>
    </Container>
  );
};

export default imgPicker;
