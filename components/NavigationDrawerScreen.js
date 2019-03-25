import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  DrawerActions
} from "react-navigation";
import styles from "./styles/StyleSheetCommon";
import Home from "../components/Home";
import Settings from "../components/Settings";
import About from "../components/About";
import DrawerScreen from "../components/DrawerScreen";

export default class NavigationDrawerScreen extends Component{
  constructor(props){
    super(props);
    console.log('constructor called');
  }
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.heading}>
      Navigation
      </Text>
      </View>
     //<AppContainer/>
    );
  }
}

const DrawerNavigator = createDrawerNavigator(
  {
    About: About,
    Settings: Settings
  },
  {
    gesturesEnabled: true
  },

  {
    initialRouteName: "About",
    contentComponent: DrawerScreen,
    drawerWidth: 300
  }
);
const AppContainer = createAppContainer(DrawerNavigator);




