import React from "react";
import { View, Text } from "react-native";
import calendarStyles from "../styles/CalendarStyles";

import { MonthNames } from "../services/calendarBL";

const CalendarTitle = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <View style={calendarStyles.captionContainer}>
      <Text style={calendarStyles.captionContainerText}>
        {MonthNames[month]} {year}
      </Text>
    </View>
  );
};

export default CalendarTitle;
