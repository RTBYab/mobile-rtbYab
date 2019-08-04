import Language from "../../config/settings/Language";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
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

      {dummyData.map((store, i) => (
        <TouchableOpacity
          key={i}
          style={button}
          onPress={() => {
            navigation.navigate("Result", {
              store
            });
          }}
        >
          <Text style={serachText}>{Language.Search}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default index;

const dummyData = [
  {
    title: "مبل امین",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم"
  }
];
