import React from "react";
import { Button, Text, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
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

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      tabBarVisible:false,
      headerTitle: "Home",
      tabBarLabel: "Home",
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: () => ({
      title: "Settings*"
    })
  }
  //Home: HomeScreen,
  //  Settings: SettingsScreen,
});

export default createAppContainer(TabNavigator);
