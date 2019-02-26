import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  View,
  Alert
} from "react-native";

export default class Login extends Component {
  // state = {
  //   email: "",
  //   password: ""
  // };

  constructor(props) {
    // Required step: always call the parent class' constructor
    super(props);

    this.state = {
      email: "",
      password: ""
    }
    }

  static navigationOptions = {
    header: null ,
  };
  render() {

    return (
      <View style={styles.container}>
        <Image
          source={{
            uri:
              "https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png"
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text style={styles.welcome}>Welcome to Yogesh App!</Text>
        <TextInput
          style={styles.txtInput}
          placeholder="Email Address"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.txtInput}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
          onChangeText={password => this.setState({ password })}
        />

        <View style={styles.buttonContainer}>
        
          <Button
            title="Login"
            color="#FF8C00"
            onPress={() => this._submitForm()}
          />
        </View>
      </View>
    );
  }

  _submitForm = () => {


    if (this.state.email == this.state.password) {
      console.log("Success");
     // alert('Success')
      this.props.navigation.replace("Tab");
    } else {
      console.log("Failure");
      alert('Failure')
    }
  };
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
   // backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    color: "#FF8C00",
    fontFamily: "avenir",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  txtInput: {
    width: 300,
    height: 45,
    marginTop: 10,
    padding: 5,
    // borderWidth: 2,
    backgroundColor: "#DCDCDC",
    borderRadius: 2,
    fontFamily: "avenir book"
  },
  buttonContainer: {
    width: 300,
    borderRadius: 10,
    margin: 30,
    marginTop:60,
    borderWidth: 1,
    backgroundColor: '#68a0cf',
    overflow: 'hidden'
  }
});
