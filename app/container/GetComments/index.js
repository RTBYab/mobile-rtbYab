import React, { useState } from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";
import CommentFlatListView from "./CommentsFlatListView";

const GetComments = ({ store }) => {
  const [seed, setSeed] = useState(1);
  const [page, setPage] = useState(1);
  const [isloading, setIsLoading] = useState(false);
  const [isrefreshing, setIsRefreshing] = useState(false);
  return (
    <View>
      <FlatList
        inverted={true}
        data={store.store.comments}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        // onEndReached={handleLoadMore}
        onEndReachedThreshold={6}
        renderItem={({ item }) => <CommentFlatListView item={item} />}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  store: state.store
});

export default connect(mapStateToProps)(GetComments);
