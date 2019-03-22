import React from "react";
import Week from "./Week";

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

const Month = ({
  firstMonthDay,
  daysInMonth,
  monthIndex,
  year,
  monthHolidayList
}) => {
  return (
    <div>
      <ul className="week-title">
        {weekTitle.map(item => {
          return (
            <li className="day-name" key={item} type={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <div className="week-line">
        {getMonthDays(firstMonthDay, daysInMonth).map(item => (
          <Week
            year={year}
            monthIndex={monthIndex}
            week={item}
            monthHolidayList={monthHolidayList}
          />
        ))}
      </div>
    </div>
  );
};

export default Month;
