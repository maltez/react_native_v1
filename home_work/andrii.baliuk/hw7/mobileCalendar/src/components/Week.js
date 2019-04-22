import React from "react";
import { View } from "react-native";
import Day from "./Day";
import calendarStyles from "../styles/CalendarStyles";

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

function isToday(day, month, year) {
  const currentDate = new Date();
  return (
    currentDate.getDate() === day &&
    currentDate.getMonth() === month &&
    currentDate.getFullYear() === year
  );
}

const Week = ({ week, monthIndex, year, monthHolidayList }) => {
  return (
    <View style={calendarStyles.weekContainer}>
      {week.map((item, index) => {
        return (
          <Day
            key={`${week}-${monthIndex}-${year}-${index}`}
            isWeekend={
              item === "" ? false : isWeekend(new Date(year, monthIndex, item))
            }
            dateInfo={monthHolidayList.find(dataItem => {
              return (
                dataItem.date.datetime.year === year &&
                dataItem.date.datetime.day === item &&
                dataItem.date.datetime.month === monthIndex + 1
              );
            })}
            day={item}
            isToday={isToday(item, monthIndex, year)}
          />
        );
      })}
    </View>
  );
};

export default Week;
