import ActionTypes from "../ActionTypes";
import {
  applyDate,
  applyHolidayList,
  applyMonthHolidays
} from "../../services/reducerFunctions";

const INITIAL_STATE = {
  date: new Date(),
  holidayList: [],
  monthHolidayList: []
};

function calendarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_DATE:
      return applyDate(state, action.date);

    case ActionTypes.SET_HOLIDAY_LIST:
      return applyHolidayList(state, action.holidayList);

    case ActionTypes.SET_MONTH_HOLIDAYS:
      return applyMonthHolidays(state, action.monthHolidayList);

    default:
      return state;
  }
}

export default calendarReducer;
