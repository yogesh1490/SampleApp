import React, { Component } from "react";
import styles from "./styles/StyleSheetCommon";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  propTypes,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Its Settings Screen</Text>

        <Text style={styles.textStyle}>
          Name = {this.props.navigation.state.params.NameOBJ}
        </Text>
 
        <Text style={styles.textStyle}>
          Number = {this.props.navigation.state.params.NumberOBJ}
        </Text>

        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
// SettingsScreen.propTypes={
//   message:propTypes.string
// }

SettingsScreen.defaultProps={
  NameOBJ:'',
  NumberOBJ:''
}
