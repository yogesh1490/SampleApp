import { StyleSheet, Platform } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 2,
    marginTop: 4,
    marginBottom: 4,
    borderRadius: 5,
    borderColor: "red",
    backgroundColor: "#FFF",
    elevation: 1
  },
  title: {
    fontSize: 16,
    color: "#000"
  },
  container_text: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 12,
    justifyContent: "center"
  },
  description: {
    fontSize: 11,
    textAlign:"justify",
  },
  photo: {
    height: 50,
    width: 50
  },
  heading: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  menuItem: {
    padding: 10,
    marginTop: 4,
    marginBottom: 4,
    borderWidth: 0.5,
    borderColor: "#d6d7da"
  }
}));
