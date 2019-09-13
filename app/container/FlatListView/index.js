import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const FlatListView = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.mainStyle}>
      <Image source={item.image} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    width: "33.34%"
  },
  imageStyle: {
    margin: 7,
    height: 100,
    width: 110,
    borderRadius: 9
  }
});

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps)(FlatListView);
