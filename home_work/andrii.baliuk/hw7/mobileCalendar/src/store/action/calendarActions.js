import ActionTypes from "../ActionTypes";
import { holidayAPI } from "../../backend";

/* Action setter */
const setCurrentDate = date => ({
  type: ActionTypes.SET_DATE,
  date
});

const setHolidayList = holidayList => ({
  type: ActionTypes.SET_HOLIDAY_LIST,
  holidayList
});

const setMonthHolidayList = monthHolidayList => ({
  type: ActionTypes.SET_MONTH_HOLIDAYS,
  monthHolidayList
});

/* functions */
const getHolidays = (dispatch, date, country = "UA") => {
  holidayAPI
    .getHolidayList(country, date.getFullYear())
    .then(response => {
      return response.json();
    })
    .then(json => {
      const { meta, response } = json;
      if (response && meta.code === 200) {
        const { holidays } = response;
        if (holidays) {
          dispatch(setHolidayList(holidays));
          dispatch(
            setMonthHolidayList(
              holidays.filter(item => {
                return item.date.datetime.month - 1 === date.getMonth();
              })
            )
          );
        }
      } else {
        throw meta;
      }
    })
    .catch(error => {
      console.error(error);
    });
};

const doSetCurrentDate = () => {
  return (dispatch, getState) => {
    const { date, holidayList } = getState().calendarState;
    const today = new Date();

    dispatch(setCurrentDate(today));
    if (today.getFullYear() !== date.getFullYear()) {
      getHolidays(dispatch, today);
    } else {
      dispatch(
        setMonthHolidayList(
          holidayList.filter(item => {
            return item.date.datetime.month - 1 === today.getMonth();
          })
        )
      );
    }
  };
};

const doSetPrevMonth = () => {
  return (dispatch, getState) => {
    const { date, holidayList } = getState().calendarState;
    const newDate =
      date.getMonth() === 0
        ? new Date(date.getFullYear() - 1, 11, 1)
        : new Date(date.getFullYear(), date.getMonth() - 1, 1);

    dispatch(setCurrentDate(newDate));
    if (newDate.getFullYear() !== date.getFullYear()) {
      getHolidays(dispatch, newDate);
    } else {
      dispatch(
        setMonthHolidayList(
          holidayList.filter(item => {
            return item.date.datetime.month - 1 === newDate.getMonth();
          })
        )
      );
    }
  };
};

const doSetNextMonth = () => {
  return (dispatch, getState) => {
    const { date, holidayList } = getState().calendarState;
    const newDate =
      date.getMonth() === 11
        ? new Date(date.getFullYear() + 1, 0, 1)
        : new Date(date.getFullYear(), date.getMonth() + 1, 1);

    dispatch(setCurrentDate(newDate));
    if (newDate.getFullYear() !== date.getFullYear()) {
      getHolidays(dispatch, newDate);
    } else {
      dispatch(
        setMonthHolidayList(
          holidayList.filter(item => {
            return item.date.datetime.month - 1 === newDate.getMonth();
          })
        )
      );
    }
  };
};

const doSetPrevYear = () => {
  return (dispatch, getState) => {
    const { date } = getState().calendarState;
    const newDate = new Date(date.getFullYear() - 1, date.getMonth(), 1);

    dispatch(setCurrentDate(newDate));
    getHolidays(dispatch, newDate);
  };
};

const doSetNextYear = () => {
  return (dispatch, getState) => {
    const { date } = getState().calendarState;
    const newDate = new Date(date.getFullYear() + 1, date.getMonth(), 1);

    dispatch(setCurrentDate(newDate));
    getHolidays(dispatch, newDate);
  };
};

const doUpdateHolidays = () => {
  return (dispatch, getState) => {
    const { date } = getState().calendarState;
    getHolidays(dispatch, date);
  };
};

export {
  doSetCurrentDate,
  doSetPrevMonth,
  doSetNextMonth,
  doSetPrevYear,
  doSetNextYear,
  doUpdateHolidays
};
