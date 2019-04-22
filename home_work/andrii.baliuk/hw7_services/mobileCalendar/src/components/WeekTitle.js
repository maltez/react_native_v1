import React from "react";
import { View, Text } from "react-native";
import calendarStyles from "../styles/CalendarStyles";

const WeekTitle = ({ weekName }) => {
  return (
    <View style={calendarStyles.weekTitleView}>
      <Text
        key={weekName}
        style={[
          calendarStyles.weekTitleText,
          {
            color:
              weekName === "Sun" || weekName === "Sat" ? "#ff0000" : "#000000"
          }
        ]}
      >
        {weekName}
      </Text>
    </View>
  );
};

export default WeekTitle;
