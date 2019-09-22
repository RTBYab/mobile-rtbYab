import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getPosts } from "../../redux/Actions/post";
import Const from "../../config/settings/Constants";
import {
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
  Text
} from "react-native";

const { width } = Dimensions.get("window");

const GetStorePosts = ({ post, auth, getPosts }) => {
  const id = auth.user._id;

  useEffect(() => {
    getPosts(id);
  }, [getPosts]);

  return (
    <FlatList
      numColumns={3}
      data={post.post}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <Image
            source={{
              uri: `http://localhost:8080/uploads/postImages/${id}/${item.photo}`
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
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(GetStorePosts);
