import React from "react";
import { View } from "react-native";
import WeekTitle from "./WeekTitle";
import Week from "./Week";
import calendarStyles from "../styles/CalendarStyles";

import { WeekNames, getMonthDays } from "../services/calendarBL";

const Month = ({ date, monthHolidayList, onPressDay }) => {
  return (
    <View>
      <View style={calendarStyles.weekTitleContainer}>
        {WeekNames.map(item => (
          <WeekTitle key={item} weekName={item} />
        ))}
      </View>

      {getMonthDays(date).map((item, index) => (
        <Week
          key={index}
          date={date}
          week={item}
          monthHolidayList={monthHolidayList}
          onPressDay={onPressDay}
        />
      ))}
    </View>
  );
};

export default Month;
