import calendarStyles from "../styles/CalendarStyles";

const MonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const WeekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const getTypeOfHolidey = type => {
  if (type.includes("National holiday")) {
    return calendarStyles.isNational;
  }
  if (type.includes("Orthodox")) {
    return calendarStyles.isOrtodox;
  }
  if (type.includes("Clock change/Daylight Saving Time")) {
    return calendarStyles.isClockTime;
  }
  if (type.includes("Observance")) {
    return calendarStyles.isObservance;
  }
  if (type.includes("Season")) {
    return calendarStyles.isSeason;
  }

  return {};
};
const getStyleByHolidayType = type => {
  if (type === "National holiday") {
    return calendarStyles.isNational;
  }
  if (type === "Orthodox") {
    return calendarStyles.isOrtodox;
  }
  if (type === "Clock change/Daylight Saving Time") {
    return calendarStyles.isClockTime;
  }
  if (type === "Observance") {
    return calendarStyles.isObservance;
  }
  if (type === "Season") {
    return calendarStyles.isSeason;
  }

  return {};
};

function getMonthDays(date) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const firstMonthDay = new Date(year, monthIndex, 1).getDay();
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

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

function isWeekend(date, item) {
  if (item === "") {
    return false;
  }
  const day = new Date(date.getFullYear(), date.getMonth(), item).getDay();
  return day === 0 || day === 6;
}

function isToday(day, date) {
  const currentDate = new Date();
  return (
    currentDate.getDate() === day &&
    currentDate.getMonth() === date.getMonth() &&
    currentDate.getFullYear() === date.getFullYear()
  );
}

function getDateInfo(monthHolidayList, date, item) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();

  return monthHolidayList.find(
    dataItem =>
      dataItem.date.datetime.year === year &&
      dataItem.date.datetime.day === item &&
      dataItem.date.datetime.month === monthIndex + 1
  );
}

export {
  MonthNames,
  WeekNames,
  getTypeOfHolidey,
  getStyleByHolidayType,
  getMonthDays,
  isWeekend,
  isToday,
  getDateInfo
};
