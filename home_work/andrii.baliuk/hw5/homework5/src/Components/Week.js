import React from "react";
import Day from "./Day";

function isWeekend(date) {
  const day = date.getDay();
  return day === 0 || day === 6;
}

const Week = ({ week, monthIndex, year, monthHolidayList }) => {
  const currentDate = new Date();
  return (
    <ul className="week-line">
      {week.map(item => {
        return (
          <Day
            data={monthHolidayList.find(dataItem => {
              return (
                dataItem.date.datetime.year === year &&
                dataItem.date.datetime.day === item &&
                dataItem.date.datetime.month === monthIndex + 1
              );
            })}
            isWeekend={
              item === "" ? false : isWeekend(new Date(year, monthIndex, item))
            }
            day={item}
            isToday={
              currentDate.getDate() === item &&
              currentDate.getMonth() === monthIndex &&
              currentDate.getFullYear() === year
            }
          />
        );
      })}
    </ul>
  );
};

export default Week;
