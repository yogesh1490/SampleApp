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

export default class SettingsScreen extends Component {
  state = {
    myState1: 'Android',
    myState2: 'I am Android developer'
 }
 updateState = () =>{
  this.setState({ myState2: 'I am iOS developer' })
 }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

        <Text style={styles.textStyle}>
        {this.state.myState1} 
        </Text> 
 
        <Text onPress = {this.updateState}>
               {this.state.myState2}
            </Text>
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
