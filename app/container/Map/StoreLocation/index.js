import React from "react";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import { Entypo } from "@expo/vector-icons";
import Colors from "../../../config/settings/color";
import Language from "../../../config/settings/Language";
import Constants from "../../../config/settings/Constants";
import { View, StyleSheet, Dimensions, Text } from "react-native";

class StoreLocation extends React.Component {
  state = {
    focusedLocation: {
      latitude: this.props.store.store.location.coordinates[1],
      longitude: this.props.store.store.location.coordinates[0],
      latitudeDelta: 0.028,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.012
    },
    locationChoosen: false
  };
  getLocationHandler = () => {
    navigator.geolocation.getCurrentPosition(
      pos => {
        const coordsEvent = {
          nativeEvent: {
            coordinate: {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude
            }
          }
        };
        this.pickLocationHandler(coordsEvent);
      },
      err => {
        console.log(err);
        alert("متاسفانه با اشکالی همراه شدیم لطفا دوباره تلاش کنید");
      }
    );
  };
  pickLocationHandler = e => {
    const coords = e.nativeEvent.coordinate;
    this.animation.animateToRegion({
      ...this.state.focusedLocation,
      latitude: coords.latitude,
      longitude: coords.longitude
    });

    this.setState(prevState => {
      return {
        focusedLocation: {
          ...prevState.focusedLocation,
          latitude: coords.latitude,
          longitude: coords.longitude
        },
        locationChoosen: true
      };
    });
    // Send Props to FIRTSREGISTRATION container
    this.props.locationPicker({
      latitude: coords.latitude,
      longitude: coords.longitude
    });
  };

  render() {
    const { focusedLocation, locationChoosen } = this.state;
    const { store, show, scrollEnabled } = this.props;
    let marker;

    if (locationChoosen || show) {
      marker = (
        <MapView.Marker.Animated
          pinColor={Colors.Alternative}
          coordinate={focusedLocation}
          title={Language.OnMapTitle}
        />
      );
    }
    return (
      <View style={{ flex: 1, zIndex: 1 }}>
        <View style={styles.view}>
          <MapView
            style={styles.map}
            zoomEnabled={false}
            showsTraffic={false}
            showsIndoors={false}
            loadingEnabled={true}
            rotateEnabled={false}
            showsBuildings={false}
            scrollEnabled={scrollEnabled}
            initialRegion={focusedLocation}
            loadingIndicatorColor={Colors.Alternative}
          >
            {marker}
          </MapView>
        </View>
        <View style={styles.iconWrapper}>
          <Entypo name="location-pin" color={Colors.Alternative} size={28} />
          <Text style={styles.addressFont}>آدرس :</Text>
        </View>
        <View style={styles.addressWrapper}>
          <Text style={styles.address}>{store.store.address}</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  store: state.store
});
export default connect(mapStateToProps)(StoreLocation);

const styles = StyleSheet.create({
  view: {
    flex: 0.9,
    elevation: 3,
    shadowRadius: 3,
    shadowOpacity: 0.9,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,0.7)",
    shadowOffset: { width: 2, height: 4 }
  },
  map: {
    top: "-15%",
    width: "100%",
    height: "150%",
    position: "absolute"
  },
  address: {
    fontSize: 16,
    marginLeft: 9,
    marginRight: 66,
    marginBottom: 20,
    fontFamily: "Main",
    textAlign: "right"
  },
  iconWrapper: {
    // marginTop: -10,
    alignItems: "center",
    backgroundColor: "#cccc",
    flexDirection: "row-reverse"
  },
  addressFont: {
    fontFamily: "Main2",
    textAlign: "right"
  },
  addressWrapper: {
    backgroundColor: "#cccc"
  }
});
