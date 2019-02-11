import React, { Component } from "react";
import styles from "./styles/StyleSheetCommon";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";

export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}
