import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import StarRating from "react-native-star-rating";
import { EvilIcons } from "@expo/vector-icons";
import AnimatdFlatList from "../components/AnimatedFlatList";

const ResultScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, margin: 5, position: "relative" }}>
      <Text
        style={{
          fontFamily: "Main",
          marginRight: 3,
          alignSelf: "center",
          padding: 60
        }}
      >
        محل تبلیغات شما :){" "}
      </Text>
      {dummyData.map((store, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate("Store", {
              store: store
            });
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignContent: "center",
              margin: 4,
              justifyContent: "flex-end",
              shadowColor: "black",
              elevation: 5,
              backgroundColor: "white",
              padding: 15
            }}
          >
            <View style={{ flex: 1 }}>
              <View
                style={{
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  margin: 3
                }}
              >
                <Text
                  style={{ fontFamily: "Main2", marginRight: 3, marginLeft: 3 }}
                >
                  {store.title}
                </Text>
                {store.rate && (
                  <StarRating
                    starSize={14}
                    rating={store.rate}
                    fullStarColor={"rgb(125, 87, 252)"}
                  />
                )}
              </View>
              <Text style={{ fontFamily: "Main", marginRight: 3 }}>
                {store.description}
              </Text>
              <View
                style={{
                  backgroundColor: "white",
                  flexDirection: "row-reverse",
                  alignItems: "center",
                  padding: 1
                }}
              >
                <EvilIcons
                  color="rgb(125, 87, 252)"
                  name="location"
                  size={16}
                  style={{
                    justifyContent: "flex-start",
                    margin: 3
                  }}
                />
                <Text
                  numberOfLines={1}
                  style={{
                    fontFamily: "Main",
                    marginRight: 3,
                    width: 190,
                    alignSelf: "flex-end"
                  }}
                >
                  فاصله از شما:
                  {store.distance} کیلومتر
                </Text>
              </View>
            </View>
            <Image
              source={store.image}
              style={{
                width: 100,
                height: 100,
                borderRadius: 5,
                marginLeft: 5
              }}
            />
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

ResultScreen.navigationOptions = {
  header: null
};

export default ResultScreen;

const dummyData = [
  {
    title: "مبل امین",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم",
    rate: 5,
    distance: 1,
    comments: "۷۶۸",
    followers: "۱۲۹۸",
    telephone: '۲۲۱۵۱۶۱۷'
  },
  {
    title: "مبل متین",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم",
    rate: 4,
    distance: 1
  },
  {
    title: "مبل جواد",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم",
    rate: 3,
    distance: 1
  },
  {
    title: "مبل رضا",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم",
    rate: 2,
    distance: 2
  },
  {
    title: "مبل حسین",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم",
    rate: 1,
    distance: 2
  },
  {
    title: "مبل حسن",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم"
  },
  {
    title: "مبل امین",
    description: "بهترین کالا و خدمات در اطراف شما",
    image: require("../../assets/image/mobl.jpeg"),
    address:
      "تهران خیابان شیخ بهایی خیابان الوند کوچه مدبر پلاک ۴۱ واحدروم طبقه سوم زنگ چهارم"
  }
];
