import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import styles from "./styles/StyleSheetCommon";

export default class About extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
          About
        </Text>
      </View>
    );
  }
}
