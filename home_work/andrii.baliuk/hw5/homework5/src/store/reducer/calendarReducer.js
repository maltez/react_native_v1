import ActionTypes from "../ActionTypes";

const INITIAL_STATE = {
  date: new Date(),
  holidayList: [],
  monthHolidayList: []
};

function calendarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_DATE:
      return { ...state, date: action.date };

    case ActionTypes.SET_HOLIDAY_LIST:
      return { ...state, holidayList: action.holidayList };

    case ActionTypes.SET_MONTH_HOLIDAYS:
      return { ...state, monthHolidayList: action.monthHolidayList };

    default:
      return state;
  }
}

export default calendarReducer;
