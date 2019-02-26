import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from "./styles/StyleSheetCommon";
import Settings from "./Settings";

export default class About extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          About
        </Text>
        <Settings message={'Seeting screen Open in About Screen!!!'}/>
      </View>
    );
  }
}

