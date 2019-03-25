import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableHighlight,
  Alert
} from "react-native";
import { openDatabase } from "react-native-sqlite-storage";
var db = openDatabase({ name: "UserDatabase.db" });

export default class NumEmployee extends React.Component {
  static navigationOptions = {
    title: "Number of Employee",

    headerStyle: {
      backgroundColor: "#f05555"
    },

    headerTintColor: "#fff"
  };

  constructor(props) {
    super(props);
    this.state = {
      FlatListItems: []
    };
    db.transaction(tx => {
      tx.executeSql("SELECT * FROM table_user", [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        this.setState({
          FlatListItems: temp
        });
      });
    });
  }
  ListViewItemSeparator = () => {
    return (
      <View
        style={{ height: 0.9, width: "100%", backgroundColor: "#ff0000" }}
      />
    );
  };
  render() {
    return (
      <View style={{ backgroundColor: "#ffcccc", height: "100%" }}>
        <FlatList
          data={this.state.FlatListItems}
          // ItemSeparatorComponent={this.ListViewItemSeparator}
        
          renderItem={({ item }) => (
            <TouchableHighlight
              onLongPress={this._optionAlertHandler.bind(this,item.user_id)}
              activeOpacity={0.6}
              style={styles.button}
            >
              <View
                key={item.user_id}
                style={{ paddingRight: 20, paddingLeft: 20, paddingTop: 20 }}
              >
                {/* <Text>Id: {item.user_id}</Text> */}
                <Text style={styles.textUsernameStyle}>
                  Name: {item.user_name}
                </Text>
                <Text style={styles.textContactStyle}>
                  Contact: {item.user_contact}
                </Text>
                <Text style={styles.textPostStyle}>{item.user_address}</Text>
                <View
                  style={{
                    backgroundColor: "#ff0000",
                    height: 0.9,
                    width: "100%",
                    marginTop: 20
                  }}
                />
              </View>
            </TouchableHighlight>
          )}

          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }

  _optionAlertHandler(id){
    //function to make three option alert
    console.log("on Pressed id:-", id)
    Alert.alert(
      //title
      "Hello",
      //body
      "Do you want to modify the DB?",
      [
        { text: "Delete", onPress: () => this.deleteItem.bind(this,id) },
        { text: "Update", onPress: () => this.updateItem },
        { text: "cancel", onPress: () => console.log("cancel Pressed") }
      ],
      { cancelable: true }
    );
  };

  deleteItem(id){

    var that = this;
  //  const { input_user_id } = this.state;
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => that.props.navigation.navigate('HomeScreen'),
                },
              ],
              { cancelable: false }
            );
          } else {
            alert('Please insert a valid User Id');
          }
        }
      );
    });

  };
  updateItem = () => {};
}

const styles = StyleSheet.create({
  textUsernameStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff0000"
  },
  textContactStyle: {
    fontSize: 16,
    color: "#ff0000"
  },
  textPostStyle: {
    fontSize: 16,
    color: "#ff0000"
  }
});
