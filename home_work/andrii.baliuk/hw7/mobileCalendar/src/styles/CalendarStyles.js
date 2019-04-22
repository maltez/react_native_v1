import { StyleSheet } from "react-native";
import { Constants } from "expo";
import Layout from "../constants/Layout";

const size = (Layout.window.width - 10) / 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  },
  calendarContainer: {
    height: Layout.window.height - Constants.statusBarHeight,
    width: Layout.window.width - 10,
    marginTop: 30,
    justifyContent: "space-between",
    flexDirection: "column"
  },
  captionContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 25
  },
  captionContainerText: {
    fontSize: 24,
    fontWeight: "bold"
  },
  getMonthInfoBtn: {
    marginBottom: 25
  },
  buttonControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  weekTitleContainer: {
    flexDirection: "row"
  },
  weekTitleView: {
    width: size,
    height: size,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5
  },
  weekTitleText: {
    fontSize: 18
  },
  weekContainer: {
    flexDirection: "row"
  },
  dayContainer: {
    width: size,
    height: size
  },
  dayTextContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e5e4e6",
    borderRadius: 32
  },
  dayText: {
    fontSize: 18
  },
  isWeekend: {
    backgroundColor: "grey"
  },
  today: {
    borderWidth: 2,
    borderColor: "#ff0000"
  },
  isNational: {
    backgroundColor: "#ff0000"
  },
  isOrtodox: {
    backgroundColor: "#489424"
  },
  isClockTime: {
    backgroundColor: "#c8d62e"
  },
  isObservance: {
    backgroundColor: "#2ecbd6"
  },
  isSeason: {
    backgroundColor: "#722ed6"
  }
});

export default styles;
