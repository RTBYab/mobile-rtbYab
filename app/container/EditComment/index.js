import {
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import Colors from "../../config/settings/color";
import StarRating from "react-native-star-rating";
import Language from "../../config/settings/Language";
import Constants from "../../config/settings/Constants";
import { editComment } from "../../redux/Actions/storeAction";
import { CommentText, HLine, Text, Button, ButtonText } from "./style";

const EditComment = ({ auth, store, navigation, editComment }) => {
  const section = navigation.getParam("section");
  const [comment, setComment] = useState(section.text);
  const [rate, setRate] = useState(section.rate);
  const { width } = Dimensions.get("window");

  const onStarRatingPress = (rating) => {
    setRate(rating);
  };

  const submitNewCommnet = async () => {
    if (rate === 0) {
      return Alert.alert("ستاره", " نمره کسب و کار من چند ستارس؟", [
        { text: "باشه" },
      ]);
    }
    const { token } = auth;
    const commentId = section._id;
    console.log("raaate", rate);
    const storeId = store.store._id;

    await editComment({ commentId, rate, token, comment, storeId, navigation });

    setRate(0);
    setComment("");
  };

  return (
    <ScrollView>
      <View style={{ margin: 12 }}>
        <Text style={{ textAlign: "center" }}>ثبت نظر </Text>
        <HLine style={{ marginTop: width / 90 }} />
        <HLine style={{ marginTop: -width / 90.0001 }} />
        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            flexDirection: "row-reverse",
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
            ref={(input) => {
              textInput = input;
            }}
            selectedStar={(rating) => onStarRatingPress(rating)}
          />
        </View>
        <CommentText
          multiline={true}
          spellCheck={false}
          autoCorrect={false}
          blurOnSubmit={true}
          defaultValue={section.text}
          clearButtonMode="always"
          maxLength={Constants.textInput.comment}
          underlineColorAndroid={Colors.mainWhite}
          onChangeText={(comment) => setComment(comment)}
          placeholder="نظرت درباره کسب و کار من چیه؟"
        />
        <HLine />
        <View style={{ alignItems: "center", marginTop: 15, marginBottom: 35 }}>
          <TouchableOpacity onPress={submitNewCommnet}>
            <Button>
              <ButtonText>{Language.EditComment}</ButtonText>
            </Button>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  store: state.store,
});

export default connect(mapStateToProps, { editComment })(EditComment);
