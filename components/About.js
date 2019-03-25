import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage ,
  TouchableOpacity
} from 'react-native';
import styles from "./styles/StyleSheetCommon";
import InputText from "./InputText";

export default class About extends React.Component{

  state = {
    'email': ''
 }
 componentDidMount = () => AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }))
 
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          About
        </Text>
        <Text style={styles.heading}>
        {this.state.email}
        </Text>
        <TouchableOpacity onPress={this.PassIntent} activeOpacity={0.7} style={styles.button} >
 
          <Text style={styles.buttonText}> Input Text Screen!!!</Text>
 
        </TouchableOpacity>
      </View>
    );
  }

  PassIntent = () => {
 
    this.props.navigation.navigate('InputText');

  }
}

