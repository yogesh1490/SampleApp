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
        <Text>{this.props.message}</Text>
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
  message:'Its Settings Screen'
}
