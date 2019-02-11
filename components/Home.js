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

export default class HomeScreen extends Component {
  render() {
    // return (
    //   <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    //     <Text>Home!</Text>
    //     <Button
    //       title="Go to Settings"
    //       onPress={() => this.props.navigation.navigate("Settings")}
    //     />
    //   </View>
    // );

    // return (
    //   <View style={styles.container}>
    //     <FlatList
    // data={[
    //   { key: "Devin" },
    //   { key: "Jackson" },
    //   { key: "James" },
    //   { key: "Joel" },
    //   { key: "John" },
    //   { key: "Jillian" },
    //   { key: "Jimmy" },
    //   { key: "Julie" }
    // ]}
    //       renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
    //     />
    //   </View>
    // );

    const CustomRow = ({ title, description, image_url }) => (
      <View style={styles.container}>
        <Image source={{ uri: image_url }} style={styles.photo} />
        <View style={styles.container_text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    );

    const CustomListview = ({ itemList }) => (
      <View style={styles.container}>
        <FlatList
          data={itemList}
          renderItem={({ item }) => (
            <CustomRow
              title={item.title}
              description={"React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. ... React Native also exposes JavaScript interfaces for platform APIs, so your React Native apps can access platform features like the phone camera, or the user's location."}
              image_url={
                "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
              }
            />
          )}
        />
      </View>
    );

    return (
      <View style={styles.container}>
        <CustomListview
          itemList={[
            { title: "Devin" },
            { title: "Jackson" },
            { title: "James" },
            { title: "Joel" },
            { title: "John" },
            { title: "Jillian" },
            { title: "Jimmy" },
            { title: "Julie" }
          ]}
        />
      </View>
    );
  }
}
