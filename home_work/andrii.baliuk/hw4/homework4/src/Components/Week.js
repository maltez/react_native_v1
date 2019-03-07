import React from 'react';
import Day from './Day';

const Week = ({ week, monthIndex, year }) => {
  const currentDate = new Date();
  return (
    <ul className="week-line">
      {week.map(item => {
        return (
          <Day
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
