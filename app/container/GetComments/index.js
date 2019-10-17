import React from "react";
import { connect } from "react-redux";
import { ScrollView, FlatList } from "react-native";
import CommentFlatListView from "./CommentsFlatListView";

const GetComments = ({ store, navigation }) => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <FlatList
        inverted={true}
        data={store.store.comments}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        // onEndReached={handleLoadMore}
        onEndReachedThreshold={6}
        renderItem={({ item }) => (
          <CommentFlatListView item={item} navigation={navigation} />
        )}
      />
    </ScrollView>
  );
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(mapStateToProps)(GetComments);
