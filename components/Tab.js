import React, { Component } from 'react';
import DrawerScreen from "../components/DrawerScreen";
import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  createMaterialTopTabNavigator,
  DrawerActions
} from "react-navigation";
import { View,Image, TouchableOpacity } from "react-native";
import Home from "../components/Home";
import Settings from "../components/Settings";
import About from "../components/About";
import Map from "../components/Map";
import Views from "../components/Views";
import Employee from "../components/Employee";


// export default class Tab extends React.Component{
//   static navigationOptions = {
//     header: null ,
//   };
//   render() {
//     return (
//    <AppContainer/>
//     );
 
//   }
// }

const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: Home,
    Employee: Employee,
    Views:Views,
    About: About
  },

//   {
//     header: null,
//  },
  {
    // tabBarPosition: 'bottom',
    // swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#fff",
      inactiveTintColor: "#000",
      upperCaseLabel: false,
  
      labelStyle: {
        fontSize: 14,
        padding: 2
      },
      style: {
        backgroundColor: "#f05555"
      },
      indicatorStyle: {
        backgroundColor: "#fff"
      }
    }
  }
);
//const AppContainer = createAppContainer(TabNavigator);
const DrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions:{
        header: null,
      }
    },
    About: About,
    Settings: Settings
  },
  {
    gesturesEnabled: true
  },

  {
    initialRouteName: "Home",
    contentComponent: DrawerScreen,
    drawerWidth: 300,
    style: {
      backgroundColor: "blue"
    },
  }
);

const StackNavigator = createStackNavigator(
  {
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.

    DrawerNavigator: {
      screen: DrawerNavigator,
      navigationOptions:{
        header: null,
      }
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
        backgroundColor: "#f05555"
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
