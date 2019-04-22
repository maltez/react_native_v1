import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import calendarStyles from "../styles/CalendarStyles";

const Day = ({ day, isToday, isWeekend, dateStyle, onDayClick }) => {
  return (
    <TouchableOpacity onPress={onDayClick}>
      <View
        style={[
          calendarStyles.dayContainer,
          day !== "" ? calendarStyles.dayTextContainer : {},
          isWeekend ? calendarStyles.isWeekend : {},
          isToday ? calendarStyles.today : {},
          dateStyle
        ]}
      >
        <Text style={calendarStyles.dayText}>{day || " "}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Day;
