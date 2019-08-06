import {
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import Comment from "../components/Comment";
import { EvilIcons } from "@expo/vector-icons";
import React from "react";

HEIGHT = Dimensions.get("window");

const StoreScreen = ({ navigation }) => {
  const store = navigation.getParam("store");

  // console.log(store);
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
        >
          <Image
            source={store.image}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              marginTop: 20,
              marginBottom: 10
            }}
          />
        </View>
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

        <View
          style={{
            flex: 0.5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <TouchableOpacity>
            <Text
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
            </Text>
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
                fontFamily: "Main",
                color: "#ffff",
                fontSize: 16,
                marginLeft: 50,
                alignSelf: "flex-end"
              }}
            >
              {store.address}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          {/* <View style={{ flexDirection: "row-reverse", alignItems: 'center' }}>
            <Image source={require('../../assets/image/telephone.png')}
            style={{width:20, height:20}} />
            <Text numberOfLines={1}
              style={{ fontFamily: "Main", color: "#ffff", fontSize: 16, marginLeft: 50, alignSelf: "flex-end" }}>

              {store.telephone}</Text>

          </View> */}
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
