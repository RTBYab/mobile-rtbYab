import {
  Image,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import Comment from "../container/Comment";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";
import Follow from "../container/Follow";

const { height, width } = Dimensions.get("window");

const StoreScreen = ({ navigation }) => {
  const store = navigation.getParam("store");

  return (
    <ScrollView
      style={{
        flex: 1
      }}
    >
      <View
        style={{
          flex: 1,
          height: 220
        }}
      >
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        ></View>
        <Text
          style={{
            fontFamily: "Main2",
            fontSize: 22,
            margin: 5,
            textAlign: "center"
          }}
        >
          {store.title}
        </Text>
        <Follow />
        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableOpacity>
            {/* <Text
              style={{
                fontFamily: "Main2",
                textAlign: "center"
              }}
            >
              نظرات {"\n"}
              <Text
                style={{
                  fontFamily: "Main",
                  textAlign: "center"
                }}
              >
                {store.comments}
              </Text>
            </Text> */}
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ fontFamily: "Main2", textAlign: "center" }}>
              باشگاه مشتریان {"\n"}
              <Text
                style={{
                  fontFamily: "Main",
                  textAlign: "center"
                }}
              >
                {store.followers}
              </Text>
            </Text>
          </TouchableOpacity>

          <Text style={{ fontFamily: "Main2", textAlign: "center" }}>
            امتیاز {"\n"}
            <Text
              style={{
                fontFamily: "Main",
                textAlign: "center"
              }}
            >
              {store.rate}
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, height: 285 }} />

      <View style={{ flex: 1, backgroundColor: "#747474", height: 130 }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontFamily: "Main",
            color: "#ffff",
            fontSize: 16,
            margin: 5
          }}
        >
          {" "}
          درباره ما: {store.description}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Address");
          }}
        >
          <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
            <EvilIcons
              name="location"
              size={26}
              style={{
                justifyContent: "flex-start",
                margin: 3,
                color: "#ffff",
                marginRight: 5
              }}
            />
            <Text
              numberOfLines={1}
              style={{
                fontSize: 16,
                color: "#ffff",
                marginLeft: 50,
                fontFamily: "Main",
                alignSelf: "flex-end"
              }}
            ></Text>
          </View>
        </TouchableOpacity>
        <Comment navigation={navigation} />
      </View>
    </ScrollView>
  );
};

StoreScreen.navigationOptions = {
  header: null
};

export default StoreScreen;
