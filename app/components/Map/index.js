import React from "react";
import { connect } from "react-redux";
import MapView from "react-native-maps";
import Colors from "../../config/settings/color";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "../../config/settings/Constants";
import { View, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

class Map extends React.PureComponent {
  state = {
    focusedLocation: {
      latitude: 35.6892,
      longitude: 51.389,
      latitudeDelta: 0.022,
      longitudeDelta:
        (Dimensions.get("window").width / Dimensions.get("window").height) *
        0.0122
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
  };

  render() {
    const { focusedLocation, locationChoosen } = this.state;
    let marker = null;
    if (locationChoosen) {
      marker = (
        <MapView.Marker
          pinColor={Colors.mainAppColor}
          coordinate={focusedLocation}
          title="کسب و کار من"
        />
      );
    }
    return (
      <View style={styles.view}>
        <MapView
          style={styles.map}
          initialRegion={focusedLocation}
          onPress={this.pickLocationHandler}
          ref={ref => (this.animation = ref)}
        >
          {marker}

          <TouchableOpacity onPress={this.getLocationHandler}>
            <MaterialIcons
              size={45}
              name="my-location"
              style={styles.icon}
              color={Colors.mainAppColor}
            />
          </TouchableOpacity>
        </MapView>
      </View>
    );
  }
}
const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  {}
)(Map);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    elevation: 0.5,
    shadowRadius: 2,
    shadowOpacity: 0.8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,0.7)",
    shadowOffset: { width: 1, height: 3 }
  },
  map: {
    height: 320,
    width: "90%",
    marginTop: 25,
    borderRadius: Constants.borderRadius.map
  },
  button: {
    elevation: 2,
    marginTop: 10,
    shadowRadius: 2,
    borderRadius: 50,
    shadowOpacity: 0.4,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "rgba(0,0,0,0.3)",
    shadowOffset: { width: 0, height: 0.5 }
  },
  icon: {
    marginTop: 10,
    marginLeft: 10
  }
});
