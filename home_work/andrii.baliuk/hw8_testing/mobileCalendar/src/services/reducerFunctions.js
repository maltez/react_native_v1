function applyDate(state, date) {
  return { ...state, date };
}

function applyHolidayList(state, holidayList) {
  return { ...state, holidayList };
}

function applyMonthHolidays(state, monthHolidayList) {
  return { ...state, monthHolidayList };
}

export { applyDate, applyHolidayList, applyMonthHolidays };
