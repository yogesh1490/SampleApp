import React, { Component } from "react";
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ToastAndroid,
  StyleSheet
} from "react-native";
import { State } from "react-native-gesture-handler";

export default class Views extends Component {

  constructor() {
    super();

    this.state={
      status:true
    }
  }
  render() {
    return (

      <View style={styles.container}>
       <View style={styles.halfHeight} >
       <View style={styles.ViewRow1} />
      <View style={styles.ViewRow2} />
      </View>
      <View style={styles.quarterHeight} />
      <TouchableOpacity
          style={{ backgroundColor: "red", flex: 1,}}
          onPress={this.CallFunction_onViewTop }
        >
      <View style={[styles.quarterHeight, {backgroundColor: '#f05555'}]} />
        </TouchableOpacity>
{
       this.state.status ? <Button
          style={styles.button}
          onPress={this.CallFunction_1}
          title="Next"
       />: null
}
  </View>
    );
  }

  CallFunction_onViewTop = () => {
   // ToastAndroid.show("Top View is presed...", ToastAndroid.SHORT);
   if(this.state.status==true){
     this.setState({status:false})
   }else{
     this.setState({status:true})
   }
     };

  CallFunction_1 = () => {
    ToastAndroid.show("Button is presed...", ToastAndroid.SHORT);
    this.props.navigation.navigate("NavigationDrawerScreen");
  };
}

var styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'column',
      height: "100%",
      padding: 20
  },
  halfHeight: {
      flex: 2,
      flexDirection: 'row',
      backgroundColor: '#FF3366'
  },
  ViewRow1:{
    flex: 1,
    backgroundColor: '#FFD700'
  },
  ViewRow2:{
    flex: 1,
    backgroundColor: '#228B22'
  },
  quarterHeight: {
      flex: 1,
      backgroundColor: 'blue'
  },
  button: {
    marginTop: 30,
    backgroundColor: "#f05555"
  }
});