import React from "react";
import { View, Text } from "react-native";
import calendarStyles from "../styles/CalendarStyles";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const CalendarTitle = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <View style={calendarStyles.captionContainer}>
      <Text style={calendarStyles.captionContainerText}>
        {monthNames[month]} {year}
      </Text>
    </View>
  );
};

export default CalendarTitle;
