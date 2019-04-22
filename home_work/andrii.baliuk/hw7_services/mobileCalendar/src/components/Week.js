import React from "react";
import { View } from "react-native";
import { withNavigation } from "react-navigation";
import Day from "./Day";

import {
  isWeekend,
  isToday,
  getTypeOfHolidey,
  getDateInfo
} from "../services/calendarBL";

import calendarStyles from "../styles/CalendarStyles";

const Week = ({ week, date, monthHolidayList, onPressDay }) => {
  return (
    <View style={calendarStyles.weekContainer}>
      {week.map((item, index) => {
        const dateInfo = getDateInfo(monthHolidayList, date, item);
        return (
          <Day
            key={`${week}-${date.getMonth()}-${date.getFullYear()}-${index}`}
            isWeekend={isWeekend(date, item)}
            dateStyle={dateInfo ? getTypeOfHolidey(dateInfo.type) : {}}
            day={item}
            onDayClick={() => onPressDay(dateInfo)}
            isToday={isToday(item, date)}
          />
        );
      })}
    </View>
  );
};

export default withNavigation(Week);
