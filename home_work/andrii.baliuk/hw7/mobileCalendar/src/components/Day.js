import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import calendarStyles from "../styles/CalendarStyles";

const getTypeOfHolidey = dateInfo => {
  if (dateInfo) {
    const { type } = dateInfo;
    if (type.includes("National holiday")) {
      return calendarStyles.isNational;
    }
    if (type.includes("Orthodox")) {
      return calendarStyles.isOrtodox;
    }
    if (type.includes("Clock change/Daylight Saving Time")) {
      return calendarStyles.isClockTime;
    }
    if (type.includes("Observance")) {
      return calendarStyles.isObservance;
    }
    if (type.includes("Season")) {
      return calendarStyles.isSeason;
    }
  }

  return {};
};

const onPressDay = (dateInfo, navigation) => {
  if (dateInfo) {
    navigation.navigate("DayDetails", {
      dateInfo: dateInfo
    });
  }
};

const Day = ({ day, isToday, isWeekend, dateInfo, navigation }) => {
  return (
    <TouchableOpacity onPress={() => onPressDay(dateInfo, navigation)}>
      <View
        style={[
          calendarStyles.dayContainer,
          day !== "" ? calendarStyles.dayTextContainer : {},
          isWeekend ? calendarStyles.isWeekend : {},
          isToday ? calendarStyles.today : {},
          getTypeOfHolidey(dateInfo)
        ]}
      >
        <Text style={calendarStyles.dayText}>{day || " "}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default withNavigation(Day);
