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
  return holidayAPI
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

const doSetCurrentDate = (today = new Date()) => {
  return (dispatch, getState) => {
    const { date, holidayList } = getState().calendarState;

    dispatch(setCurrentDate(today));
    if (today.getFullYear() !== date.getFullYear()) {
      return getHolidays(dispatch, today);
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
        ? new Date(`${date.getFullYear() - 1}-12-01T00:00:00.000Z`)
        : new Date(date.getFullYear(), date.getMonth() - 1, 1, 0, 0, 0);

    dispatch(setCurrentDate(newDate));
    if (date.getMonth() === 0) {
      return getHolidays(dispatch, newDate);
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
        ? new Date(`${date.getFullYear() + 1}-01-01T00:00:00.000Z`)
        : new Date(date.getFullYear(), date.getMonth() + 1, 1, 0, 0, 0);

    dispatch(setCurrentDate(newDate));
    if (date.getMonth() === 11) {
      return getHolidays(dispatch, newDate);
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
    const newDate = new Date(
      date.getFullYear() - 1,
      date.getMonth(),
      date.getDate()
    );

    dispatch(setCurrentDate(newDate));
    return getHolidays(dispatch, newDate);
  };
};

const doSetNextYear = () => {
  return (dispatch, getState) => {
    const { date } = getState().calendarState;
    const newDate = new Date(
      date.getFullYear() + 1,
      date.getMonth(),
      date.getDate()
    );

    dispatch(setCurrentDate(newDate));
    return getHolidays(dispatch, newDate);
  };
};

const doUpdateHolidays = () => {
  return (dispatch, getState) => {
    const { date } = getState().calendarState;
    return getHolidays(dispatch, date);
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
