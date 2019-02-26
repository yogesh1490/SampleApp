import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

export default class Map extends Component {
  render() {
    return (
      //  <View style={styles.container}>
      <MapView
        style={styles.map}
        showsUserLocation={false}
        followUserLocation={false}
        zoomEnabled={true}
      />
      //    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "#F5FCFF"
  },
  map: {
    height: '100%',
   // marginTop: 80
  }
});
