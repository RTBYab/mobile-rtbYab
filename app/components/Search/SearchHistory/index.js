import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const SearchHistory = ({ history, onClear, onSeacrh, searchText }) => {
  const [expanded, setExpanded] = useState(false);

  history.length == 0 && (
    <View>
      <Text>هیچی نیست</Text>
    </View>
  );

  return <ExpandableComponent />;
};

export default SearchHistory;
