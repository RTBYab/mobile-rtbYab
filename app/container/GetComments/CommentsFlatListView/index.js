import {
  Container,
  TextHeader,
  TextBody,
  Image,
  HLine,
  Viewer,
  HView,
  ReverseHView
} from "./style";
import React, { useState } from "react";
import { connect } from "react-redux";
import Colors from "../../../config/settings/color";
import Const from "../../../config/settings/Constants";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { Dimensions, TouchableOpacity } from "react-native";

const { width } = Dimensions.get("window");

const CommentFlatListView = ({ item, auth, store }) => {
  const [hearted, setHearted] = useState(false);
  const { token, user } = auth;

  return (
    <Container>
      <Viewer>
        <HView>
          {store.store.photo ? (
            <Image
              source={{
                uri: Const.URL.Image + `${auth.user._id}/${store.store.photo}`
              }}
            />
          ) : (
            <Image source={require("../../../../assets/image/mobl.jpeg")} />
          )}
          <TextHeader>: {item.commentOwner}</TextHeader>
          <ReverseHView>
            <TouchableOpacity
              style={{ position: "absolute", left: width / 2.08 }}
            >
              {item.commentedBy === user._id ? (
                <AntDesign name="delete" size={width / 25} />
              ) : (
                <FontAwesome name="exclamation-triangle" size={width / 25} />
              )}
            </TouchableOpacity>

            {/* <TouchableOpacity
              style={{ position: "absolute", left: width / 1.64 }}
            >
              {item.commentedBy != user._id && (
              )}
            </TouchableOpacity> */}

            <TouchableOpacity
              style={{ position: "absolute", left: width / 1.84 }}
            >
              <FontAwesome name="heart-o" size={width / 25} />
            </TouchableOpacity>
          </ReverseHView>
        </HView>
        {item.text.length > 40 ? (
          <TouchableOpacity>
            <TextBody numberOfLines={1.5} ellipsizeMode="tail">
              {item.text}
            </TextBody>
          </TouchableOpacity>
        ) : (
          <TextBody>{item.text}</TextBody>
        )}
      </Viewer>
      <HLine />
    </Container>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  store: state.store
});

export default connect(mapStateToProps)(CommentFlatListView);
