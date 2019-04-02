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
  StatusBar,
  Platform
} from "react-native";

export default class HomeScreen extends Component {
  // state = {
  //   data: ""
  // };

  static navigationOptions = {
    header: 'none'
  };

  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    console.log("constructor called");
  }

  componentWillMount() {
    console.log("componentWillMount called");
  }

  componentDidMount = () => {
    console.log("componentDidMount called");
    fetch("https://api.androidhive.info/json/movies.json", {
      method: "GET"
    })
      .then(response => response.json())

      .then(responseJson => {
        console.log(responseJson);

        this.setState({
          data: responseJson
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    console.log("render called");
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
              description={
                "React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android. ... React Native also exposes JavaScript interfaces for platform APIs, so your React Native apps can access platform features like the phone camera, or the user's location."
              }
              image_url={item.image}
            />
          )}
        />
      </View>
    );

    return (
      <View style={styles.container}>
        <CustomListview
          // itemList={[
          //   { title: "Devin" },
          //   { title: "Jackson" },
          //   { title: "James" },
          //   { title: "Joel" },
          //   { title: "John" },
          //   { title: "Jillian" },
          //   { title: "Jimmy" },
          //   { title: "Julie" }
          // ]}
          itemList={this.state.data}
        />
      </View>
    );
  }
}
