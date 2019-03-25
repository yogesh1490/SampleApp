import { StyleSheet, Platform } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 4,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 5,
    borderColor: "red",
    backgroundColor: "#FFF",
    alignItems: 'center',
    elevation: 1
  },
  title: {
    fontSize: 18,
    color: "#000",
    marginTop:10
  },
  container_text: {
    justifyContent: "center",
    alignItems: 'center'
  },
  description: {
    fontSize: 15,
    textAlign:"justify",
    marginTop:10
  },
  photo: {
    height: 300,
    width: '90%',
    
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
  
  },
  menuItem: {
    padding: 10,
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  } ,
  button: {
    width: '90%',
    height: 40,
    padding: 10,
    backgroundColor: '#f05555',
    borderRadius: 8,
    marginTop: 15
  }
}));
