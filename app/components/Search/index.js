import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import Language from "../../config/settings/Language";
import { Ionicons } from "@expo/vector-icons";
import style from "./style";

const index = ({ navigation }) => {
  const [query, setQuery] = useState("");
  const {
    container,
    secondaryContainer,
    button,
    serachText,
    icon,
    textInput
  } = style;

  return (
    <View>
      <View style={container}>
        <View style={secondaryContainer}>
          <Ionicons
            color="rgb(125, 87, 252)"
            name="ios-search"
            style={icon}
            size={32}
          />
          <TextInput
            placeholder={Language.SearchPlaceHolder}
            onChangeText={query => setQuery(query)}
            onclear={() => setQuery("")}
            underlineColorAndroid="white"
            clearButtonMode="always"
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
            autoFocus={false}
            style={textInput}
          />
        </View>
      </View>
      <TouchableOpacity
        style={button}
        onPress={() => {
          navigation.navigate("Result");
        }}
      >
        <Text style={serachText}>{Language.Search}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
