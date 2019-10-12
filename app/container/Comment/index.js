import { connect } from "react-redux";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../config/settings/color";
import StarRating from "react-native-star-rating";
import Language from "../../config/settings/Language";
import Constants from "../../config/settings/Constants";
import { addNewComment } from "../../redux/Actions/storeAction";
import { CommentText, HLine, Text, Button, ButtonText } from "./style";
import { View, TouchableOpacity, Alert, ScrollView } from "react-native";

const Comment = ({ auth, store, navigation, addNewComment }) => {
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");
  // const [loading, setLoading] = useState(false);

  const onStarRatingPress = rating => {
    setRate(rating);
  };

  const submitNewCommnet = async () => {
    if (rate === 0) {
      return Alert.alert("ستاره", " نمره کسب و کار من چند ستارس؟", [
        { text: "باشه" }
      ]);
    }
    const { token } = auth;
    const storeId = store.store._id;
    const id = auth.user._id;

    await addNewComment({ id, token, rate, comment, navigation, storeId });

    setRate(0);
    setComment("");
  };

  return (
    <ScrollView>
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
          <Text>نظر: </Text>
          <StarRating
            animation="rotate"
            maxStars={5}
            rating={rate}
            starSize={24}
            reversed={true}
            starStyle={{ margin: 4 }}
            fullStarColor={Colors.Alternative}
            ref={input => {
              textInput = input;
            }}
            selectedStar={rating => onStarRatingPress(rating)}
          />
        </View>
        <CommentText
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          blurOnSubmit={true}
          clearButtonMode="always"
          maxLength={Constants.textInput.comment}
          underlineColorAndroid={Colors.mainWhite}
          onChangeText={comment => setComment(comment)}
          placeholder="نظرت درباره کسب و کار من چیه؟"
        />
        <HLine />
        <View style={{ alignItems: "center", marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity onPress={submitNewCommnet}>
            <Button>
              <ButtonText>{Language.LeaveComment}</ButtonText>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(
  mapStateToProps,
  { addNewComment }
)(Comment);
