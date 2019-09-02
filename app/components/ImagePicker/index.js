import { Container } from "./style";
import React, { useState } from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity, Alert } from "react-native";

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
    setUploading(true);
    const res = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.4,
      base64: true
    });
    setUploading(false);

    if (res.uri == undefined) {
      return;
    }
    setImage(res.uri);
    submitImage(res.uri);
  };

  return (
    <Container>
      <TouchableOpacity onPress={takeImageHandler}>{children}</TouchableOpacity>
    </Container>
  );
};

export default imgPicker;
