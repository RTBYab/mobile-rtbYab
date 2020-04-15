import style from "./style.js";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { View, TextInput, Text, Image } from "react-native";

const AInputField = ({
  source,
  onFocus,
  subTitle,
  maxLength,
  multiline,
  inputStyle,
  spellCheck,
  autoCorrect,
  scrollEnabled,
  isRequired,
  placeholder,
  onChangeText,
  keyboardType,
  numberOfLines,
}) => {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const { container, inputFieldText, inputSubTitle, inputImage } = style;
  return (
    <View>
      <View style={container}>
        <TextInput
          autoCorrect={false}
          underlineColorAndroid="transparent"
          onchange={(e) => {
            onChange(e);
          }}
          onFocus={onFocus}
          keyboardType={keyboardType}
          maxLength={maxLength}
          placeholder={placeholder}
          onChangeText={onChangeText}
          isRequired={isRequired}
          multiline={multiline}
          spellCheck={spellCheck}
          autoCorrect={autoCorrect}
          scrollEnabled={scrollEnabled}
          numberOfLines={numberOfLines}
          style={[inputFieldText, inputStyle]}
          // style={inputStyle}
        />
      </View>
      <Text style={inputSubTitle}>{subTitle}</Text>
      <Image source={source} style={inputImage} />
    </View>
  );
};

AInputField.prototype = {
  onFocus: PropTypes.func,
  multiline: PropTypes.bool,
  spellCheck: PropTypes.bool,
  inputStyle: PropTypes.object,
  autoCorrect: PropTypes.bool,
  numberOfLines: PropTypes.number,
  keyboardType: PropTypes.string,
  scrollEnabled: PropTypes.bool,
  source: PropTypes.string.isRequired,
  isRequired: PropTypes.bool.isRequired,
  subTitle: PropTypes.string.isRequired,
  maxLength: PropTypes.number.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default AInputField;
