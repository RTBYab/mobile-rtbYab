import React from "react";
import { connect } from "react-redux";
import { TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

const FlatListView = ({ item }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.mainStyle}>
      <Image
        // resizeMode="contain"
        source={item.image}
        style={styles.imageStyle}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainStyle: {
    // width: "33.34%",
    // flexWrap: "wrap",
    // alignItems: "center",
    // justifyContent: "center"
    flex: 1 / 3,
    aspectRatio: 1
  },
  imageStyle: {
    borderRadius: 9,
    width: 120,
    height: 100
    // height: height > 600 ? height / 8.2 : height / 6.7
    // maxHeight: 80
  }
});

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps)(FlatListView);
