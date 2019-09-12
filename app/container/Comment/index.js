import React from "react";
import { View } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import Colors from "../../config/settings/color";
import { CommentText, HLine, Text } from "./style";

const Comment = () => {
  return (
    <View style={{ margin: 12 }}>
      <Text style={{ textAlign: "center" }}>ثبت نظر </Text>
      <HLine />
      <HLine style={{ marginTop: -5 }} />
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
          flexDirection: "row-reverse"
        }}
      >
        <EvilIcons name="comment" size={34} color={Colors.Alternative} />
        <Text style={{ marginLeft: 80 }}>نظر: </Text>
        <StarRating
          maxStars={5}
          starSize={24}
          starStyle={{ marginRight: 3 }}
          fullStarColor={Colors.Alternative}
        />
      </View>
      <CommentText
        spellCheck={false}
        autoCorrect={false}
        multiline={true}
        // defaultValue={store.store.address}
        blurOnSubmit={true}
        clearButtonMode="always"
        // underlineColorAndroid={Colors.mainWhite}
        // maxLength={Constants.textInput.postCaption}
        // onChangeText={caption => setCaption(caption)}
        placeholder="نظرت درباره کسب و کار من چیه؟"
      />
      <HLine />
    </View>
  );
};

export default Comment;
