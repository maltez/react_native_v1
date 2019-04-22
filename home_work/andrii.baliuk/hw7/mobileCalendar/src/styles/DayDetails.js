import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "red",
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15
  },
  titleName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  description: {
    marginBottom: 10
  },
  date: {
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    marginBottom: 15
  },
  dateTitle: {
    fontSize: 26
  },
  infoType: {
    borderRadius: 6
  }
});

export default styles;
