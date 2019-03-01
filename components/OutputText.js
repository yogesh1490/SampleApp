import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class OutputText extends Component {
    static navigationOptions =
      {
        title: 'Developer'
   
      };
   
    render() {
      return (
   
        <View style={styles.MainContainer}>
   
          <Text style={styles.textStyle}>
            Name = {this.props.navigation.state.params.NameOBJ}
          </Text>
   
          <Text style={styles.textStyle}>
            Number = {this.props.navigation.state.params.NumberOBJ}
          </Text>
   
        </View>
      );
    }
  }
   
//   export default Project = StackNavigator(
//     {
//       First: { screen: MainActivity },
   
//       Second: { screen: SecondActivity }
   
//     });
   
  const styles = StyleSheet.create({
   
    MainContainer: {
      
      alignItems: 'center',
      flex: 1,
      margin: 10
    },
   
    textInputStyle: {
   
      height: 40,
      width: '90%',
      textAlign: 'center',
      borderWidth: 1,
      borderColor: '#028b53',
      borderRadius: 8,
      marginTop: 15
    },
   
    button: {
   
      width: '90%',
      height: 40,
      padding: 10,
      backgroundColor: '#4CAF50',
      borderRadius: 8,
      marginTop: 15
    },
   
    buttonText: {
      color: '#fff',
      textAlign: 'center',
    },
   
    textStyle: {
   
      color: '#000',
      textAlign: 'center',
      fontSize: 20
   
    }
   
  });