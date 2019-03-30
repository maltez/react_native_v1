import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  listContainer: {
    width: "100%",
    height: "100%"
  },
  dateInfoContainer: {
    flexDirection: "row",
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 8,
    margin: 1
  },
  date: {
    flex: 1,
    margin: 1
  },
  infoName: {
    fontWeight: "bold"
  },
  infoType: {
    borderRadius: 6
  },
  info: {
    margin: 1,
    flex: 3
  }
});

export default styles;
