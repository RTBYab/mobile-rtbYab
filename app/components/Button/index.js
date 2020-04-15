import React from "react";
import style from "./style";
import PropTypes from "prop-types";

import { View, Text, TouchableOpacity } from "react-native";

const AButton = ({ buttonTitle, onPress, bStyle, tStyle, disabled }) => {
  const { container, buttonName } = style;
  return (
    <TouchableOpacity onPress={onPress} style={bStyle} disabled={disabled}>
      <View style={container}>
        <Text style={[buttonName, tStyle]}>{buttonTitle}</Text>
      </View>
    </TouchableOpacity>
  );
};
AButton.prototype = {
  disabled: PropTypes.object,
  bStyle: PropTypes.object,
  tStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  buttontitle: PropTypes.string.isRequired,
};

export default AButton;
