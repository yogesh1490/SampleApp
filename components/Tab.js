import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
//import { List } from "react-native-elements";
import { Button, FlatList, StyleSheet, Text, View,Image } from "react-native";

class HomeScreen extends React.Component {
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
//}

// constructor(props) {
//   super(props);

//   this.state = {
//     loading: false,
//     data: [],
//     page: 1,
//     seed: 1,
//     error: null,
//     refreshing: false
//   };
// }

// componentDidMount() {
//   this.makeRemoteRequest();
// }

// makeRemoteRequest = () => {
//   const { page, seed } = this.state;
//   const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
//   this.setState({ loading: true });
//   fetch(url)
//     .then(res => res.json())
//     .then(res => {
//       this.setState({
//         data: page === 1 ? res.results : [...this.state.data, ...res.results],
//         error: res.error || null,
//         loading: false,
//         refreshing: false
//       });
//     })
//     .catch(error => {
//       this.setState({ error, loading: false });
//     });
// };

// render() {
//   return (
//     <List>
//       <FlatList
//         data={this.state.data}
//         renderItem={({ item }) => (
//           <ListItem
//             roundAvatar
//             title={`${item.name.first} ${item.name.last}`}
//             subtitle={item.email}
//             avatar={{ uri: item.picture.thumbnail }}
//           />
//         )}
//       />
//     </List>
//   );
// }
//}

class SettingsScreen extends React.Component {
  render() {
    return (
  
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home"
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: () => ({
        title: "Settings"
      })
    }
    //Home: HomeScreen,
    //  Settings: SettingsScreen,
  },

  {
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "black"
    }
  }
);

const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: 'row',
      padding: 5,
      marginLeft:1,
      marginRight:1,
      marginTop: 4,
      marginBottom: 4,
      borderRadius: 5,
      borderColor: 'red',
      backgroundColor: '#FFF',
      elevation: 0,
  },
  title: {
      fontSize: 16,
      color: '#000',
  },
  container_text: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 12,
      justifyContent: 'center',
  },
  description: {
      fontSize: 11,
      fontStyle: 'italic',
  },
  photo: {
      height: 50,
      width: 50,
  },
});

const CustomRow = ({ title, description, image_url }) => (
  <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.photo} />
      <View style={styles.container_text}>
          <Text style={styles.title}>
              {title}
          </Text>
          <Text style={styles.description}>
              {description}
          </Text>
      </View>

  </View>
);


const CustomListview = ({ itemList }) => (
  <View style={styles.container}>
      <FlatList
              data={itemList}
              renderItem={({ item }) => <CustomRow
                  title={item.title}
                  description={"Description"}
                  image_url={"https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}
              />}
          />

  </View>
);

export default createAppContainer(TabNavigator);
