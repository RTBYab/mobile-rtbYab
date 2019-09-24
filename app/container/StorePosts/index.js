import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getPosts } from "../../redux/Actions/post";
import Const from "../../config/settings/Constants";
import { FlatList, TouchableOpacity, Image, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const GetStorePosts = ({ post, auth, getPosts, navigation }) => {
  const id = auth.user._id;

  useEffect(() => {
    getPosts(id);
  }, [getPosts]);

  return (
    <FlatList
      numColumns={3}
      data={post}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("PostDetails", { item });
          }}
        >
          <Image
            source={{
              uri: Const.URL.Posts + `/${id}/${item.photo}`
            }}
            style={{
              flex: 1,
              width: width / 3,
              height: width / 3,
              margin: 1
            }}
          />
        </TouchableOpacity>
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  post: state.post.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(GetStorePosts);
