import React from "react";
import { View, Text } from "react-native";
import WeekTitle from "./WeekTitle";
import Week from "./Week";
import calendarStyles from "../styles/CalendarStyles";

const weekTitle = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMonthDays(firstMonthDay, daysInMonth) {
  let weeks = [];
  let week = [];

  for (let i = 0; i < firstMonthDay; i++) {
    week.push("");
  }

  for (let i = 1; i <= daysInMonth; ++i) {
    week.push(i);
    if (week.length % 7 === 0 || i === daysInMonth) {
      weeks.push(week);
      week = [];
    }
  }

  return weeks;
}

const Month = ({ date, monthHolidayList }) => {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const firstMonthDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

  return (
    <View>
      <View style={calendarStyles.weekTitleContainer}>
        {weekTitle.map(item => (
          <WeekTitle key={item} weekName={item} />
        ))}
      </View>

      {getMonthDays(firstMonthDay, daysInMonth).map((item, index) => (
        <Week
          key={index}
          year={year}
          monthIndex={monthIndex}
          week={item}
          monthHolidayList={monthHolidayList}
        />
      ))}
    </View>
  );
};

export default Month;
