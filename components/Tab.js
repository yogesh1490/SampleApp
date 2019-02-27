import React from "react";
import DrawerScreen from "../components/DrawerScreen";
import {
  createStackNavigator,
  createDrawerNavigator,
  createMaterialTopTabNavigator,
  DrawerActions
} from "react-navigation";
import { Image, TouchableOpacity } from "react-native";
import Home from "../components/Home";
import Settings from "../components/Settings";
import About from "../components/About";
import Map from "../components/Map";

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: Home,
    Map: Map
  },
  {
    // tabBarPosition: 'bottom',
    // swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#000",
      inactiveTintColor: "gray",
      upperCaseLabel: false,
      labelStyle: {
        fontSize: 14,
        padding: 2
      },
      style: {
        backgroundColor: "#fff"
      },
      indicatorStyle: {
        backgroundColor: "#000"
      }
    }
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        header: null
       }
    },
    About: About,
    Settings: Settings
  },
  {
    gesturesEnabled: false
  },
  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerWidth: 300
  }
);

const StackNavigator = createStackNavigator(
  {
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator: {
      screen: DrawerNavigator
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      title: "ReactNavigation", // Title to appear in status bar
      headerLeft: (
        <TouchableOpacity
          onPress={() => {
            navigation.dispatch(DrawerActions.toggleDrawer());
          }}
        >
          <MenuImage style="styles.bar" navigation={navigation} />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "#333"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    })
  }
);

const MenuImage = ({ navigation }) => {

  
  if (!navigation.state.isDrawerOpen) {
    console.log("menu-button");
    return <Image source={require("../components/images/menu-button.png")} />;
  } else {
    console.log("left-arrow");
    return <Image source={require("../components/images/left-arrow.png")} />;
  }
};

export default StackNavigator;
