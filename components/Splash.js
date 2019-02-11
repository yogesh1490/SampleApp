import React, {Component} from 'react';
import {StyleSheet,StatusBar,Text,Image, View} from 'react-native';

export default class Splash extends Component{

    static navigationOptions = {
        header: null ,
      };
      
    render(){

    return(
    
     
            // <View style={styles.container}>
            //    <StatusBar hidden={true} />
            // <Text style={styles.title}>This is Splash</Text>
            // </View>

            <SetSplashImage/>
        )
    }

    componentWillMount () {
        setTimeout (() => {
            this.props.navigation.replace("Login");
        }, 2000);
    }
}

const SetSplashImage = () => (
    // <Image source = {{uri:'https://pbs.twimg.com/profile_images/486929358120964097/gNLINY67_400x400.png'}}
    // style = {{ width: 100, height: 200 }}
    // />

    <Image style={{width: '100%', height: '100%'}}
            source={{uri :'asset:/splash.jpg'}}  />
 )

const styles= StyleSheet.create({
    container:{
        backgroundColor:'green',
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        color:'black',
    },
});