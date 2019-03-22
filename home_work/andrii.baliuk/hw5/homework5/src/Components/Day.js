import React from "react";

/*0: "National holiday"
1: "Orthodox"
Observance
Clock change/Daylight Saving Time*/

const getTypeOfHolidey = type => {
  return type.includes("Orthodox") || type.includes("National holiday")
    ? "publicHoliday"
    : type.includes("Clock change/Daylight Saving Time")
    ? "clockTime"
    : type.includes("Observance")
    ? "observance"
    : type.includes("Season")
    ? "season"
    : "";
};

const Day = ({ day, isToday, isWeekend, data }) => {
  const addPorps = data
    ? {
        title: data.name,
        typeofday: getTypeOfHolidey(data.type)
      }
    : {};
  return (
    <div>
      <div
        isweekend={isWeekend ? "isWeekend" : ""}
        className={"day" + (isToday ? " isToday" : "")}
        {...addPorps}
      >
        {day || ""}
      </div>
    </div>
  );
};

export default Day;
