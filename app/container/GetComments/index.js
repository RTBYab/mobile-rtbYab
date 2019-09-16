import React from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import CommentFlatListView from "./CommentsFlatListView";

const GetComments = ({ store }) => {
  return (
    <View>
      <FlatList
        // keyExtractor={}
        inverted={true}
        data={store.store.comments}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CommentFlatListView item={item} />}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(mapStateToProps)(GetComments);
