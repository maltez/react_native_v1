import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import { expect } from "chai";

import data from "./calendarData";

import {
  doSetCurrentDate,
  doSetPrevMonth,
  doSetNextMonth,
  doSetPrevYear,
  doSetNextYear,
  doUpdateHolidays
} from "../src/store/action/calendarActions";
import types from "../src/store/ActionTypes";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("doSetCurrentDate expceted Info about april", () => {
    fetchMock.get(
      "https://calendarific.com/api/v2/holidays/?api_key=afbba6c2a5506d4d663f0ee8fd25ada775b39885&country=UA&year=2019",
      {
        body: JSON.stringify(data.year2019),
        headers: { "content-type": "application/json" }
      }
    );

    const currentDate = new Date(2019, 3, 8);
    const initialState = {
      calendarState: {
        date: new Date(2018, 1, 1),
        holidayList: [],
        monthHolidayList: []
      }
    };
    const store = mockStore(initialState);

    return store.dispatch(doSetCurrentDate(currentDate)).then(() => {
      const expectedActions = [
        { type: types.SET_DATE, date: currentDate },
        {
          type: types.SET_HOLIDAY_LIST,
          holidayList: data.year2019.response.holidays
        },
        {
          type: types.SET_MONTH_HOLIDAYS,
          monthHolidayList: data.april2019
        }
      ];
      expect(store.getActions()).to.eql(expectedActions);
    });
  });

  it("doSetCurrentDate from may expceted Info about april", () => {
    const currentDate = new Date(2019, 3, 8);
    const initialState = {
      calendarState: {
        date: new Date(2019, 4, 6, 0, 0, 0),
        holidayList: data.year2019.response.holidays,
        monthHolidayList: data.may2019
      }
    };
    const store = mockStore(initialState);
    store.dispatch(doSetCurrentDate(currentDate));
    const expectedActions = [
      {
        type: types.SET_DATE,
        date: currentDate
      },
      {
        type: types.SET_MONTH_HOLIDAYS,
        monthHolidayList: data.april2019
      }
    ];
    expect(store.getActions()).to.eql(expectedActions);
  });

  it("doSetPrevMonth expceted Info about april", () => {
    const initialState = {
      calendarState: {
        date: new Date(2019, 4, 6, 0, 0, 0),
        holidayList: data.year2019.response.holidays,
        monthHolidayList: data.may2019
      }
    };
    const store = mockStore(initialState);
    store.dispatch(doSetPrevMonth());
    const expectedActions = [
      {
        type: types.SET_DATE,
        date: new Date(2019, 3, 1, 0, 0, 0)
      },
      {
        type: types.SET_MONTH_HOLIDAYS,
        monthHolidayList: data.april2019
      }
    ];
    expect(store.getActions()).to.eql(expectedActions);
  });

  it("doSetNextMonth expceted Info about may", () => {
    const initialState = {
      calendarState: {
        date: new Date(2019, 3, 6, 0, 0, 0),
        holidayList: data.year2019.response.holidays,
        monthHolidayList: data.april2019
      }
    };
    const store = mockStore(initialState);
    store.dispatch(doSetNextMonth());
    const expectedActions = [
      {
        type: types.SET_DATE,
        date: new Date(2019, 4, 1, 0, 0, 0)
      },
      {
        type: types.SET_MONTH_HOLIDAYS,
        monthHolidayList: data.may2019
      }
    ];
    expect(store.getActions()).to.eql(expectedActions);
  });

  it("doSetNextMonth expceted Info about 01/01/2019", () => {
    fetchMock.get(
      "https://calendarific.com/api/v2/holidays/?api_key=afbba6c2a5506d4d663f0ee8fd25ada775b39885&country=UA&year=2019",
      {
        body: JSON.stringify(data.year2019),
        headers: { "content-type": "application/json" }
      }
    );

    const initialState = {
      calendarState: {
        date: new Date("2018-12-11T00:00:00.000Z"),
        holidayList: data.year2018.response.holidays,
        monthHolidayList: data.april2018
      }
    };
    const store = mockStore(initialState);
    return store.dispatch(doSetNextMonth()).then(() => {
      const expectedActions = [
        {
          type: types.SET_DATE,
          date: new Date("2019-01-01T00:00:00.000Z")
        },
        {
          type: types.SET_HOLIDAY_LIST,
          holidayList: data.year2019.response.holidays
        },
        {
          type: types.SET_MONTH_HOLIDAYS,
          monthHolidayList: data.january2019
        }
      ];
      expect(store.getActions()).to.eql(expectedActions);
    });
  });

  it("doSetPrevMonth expceted Info about 01/12/2018", () => {
    fetchMock.get(
      "https://calendarific.com/api/v2/holidays/?api_key=afbba6c2a5506d4d663f0ee8fd25ada775b39885&country=UA&year=2018",
      {
        body: JSON.stringify(data.year2018),
        headers: { "content-type": "application/json" }
      }
    );

    const initialState = {
      calendarState: {
        date: new Date("2019-01-11T00:00:00.000Z"),
        holidayList: data.year2019.response.holidays,
        monthHolidayList: data.january2019
      }
    };
    const store = mockStore(initialState);
    return store.dispatch(doSetPrevMonth()).then(() => {
      const expectedActions = [
        {
          type: types.SET_DATE,
          date: new Date("2018-12-01T00:00:00.000Z")
        },
        {
          type: types.SET_HOLIDAY_LIST,
          holidayList: data.year2018.response.holidays
        },
        {
          type: types.SET_MONTH_HOLIDAYS,
          monthHolidayList: data.december2018
        }
      ];
      expect(store.getActions()).to.eql(expectedActions);
    });
  });

  it("doSetPrevYear expceted Info about 2018", () => {
    fetchMock.get(
      "https://calendarific.com/api/v2/holidays/?api_key=afbba6c2a5506d4d663f0ee8fd25ada775b39885&country=UA&year=2018",
      {
        body: JSON.stringify(data.year2018),
        headers: { "content-type": "application/json" }
      }
    );

    const initialState = {
      calendarState: {
        date: new Date(2019, 3, 8),
        holidayList: data.year2019.response.holidays,
        monthHolidayList: data.april2019
      }
    };
    const store = mockStore(initialState);
    return store.dispatch(doSetPrevYear()).then(() => {
      const expectedActions = [
        {
          type: types.SET_DATE,
          date: new Date(2018, 3, 8)
        },
        {
          type: types.SET_HOLIDAY_LIST,
          holidayList: data.year2018.response.holidays
        },
        {
          type: types.SET_MONTH_HOLIDAYS,
          monthHolidayList: data.april2018
        }
      ];
      expect(store.getActions()).to.eql(expectedActions);
    });
  });

  it("doSetNextYear expceted Info about 2019", () => {
    fetchMock.get(
      "https://calendarific.com/api/v2/holidays/?api_key=afbba6c2a5506d4d663f0ee8fd25ada775b39885&country=UA&year=2019",
      {
        body: JSON.stringify(data.year2019),
        headers: { "content-type": "application/json" }
      }
    );

    const initialState = {
      calendarState: {
        date: new Date(2018, 3, 8),
        holidayList: data.year2019.response.holidays,
        monthHolidayList: data.april2019
      }
    };
    const store = mockStore(initialState);
    return store.dispatch(doSetNextYear()).then(() => {
      const expectedActions = [
        {
          type: types.SET_DATE,
          date: new Date(2019, 3, 8)
        },
        {
          type: types.SET_HOLIDAY_LIST,
          holidayList: data.year2019.response.holidays
        },
        {
          type: types.SET_MONTH_HOLIDAYS,
          monthHolidayList: data.april2019
        }
      ];
      expect(store.getActions()).to.eql(expectedActions);
    });
  });

  it("doUpdateHoliday check of insert data", () => {
    fetchMock.get(
      "https://calendarific.com/api/v2/holidays/?api_key=afbba6c2a5506d4d663f0ee8fd25ada775b39885&country=UA&year=2019",
      {
        body: JSON.stringify(data.year2019),
        headers: { "content-type": "application/json" }
      }
    );

    const initialState = {
      calendarState: {
        date: new Date(2019, 3, 8),
        holidayList: [],
        monthHolidayList: []
      }
    };
    const store = mockStore(initialState);
    return store.dispatch(doUpdateHolidays()).then(() => {
      const expectedActions = [
        {
          type: types.SET_HOLIDAY_LIST,
          holidayList: data.year2019.response.holidays
        },
        {
          type: types.SET_MONTH_HOLIDAYS,
          monthHolidayList: data.april2019
        }
      ];
      expect(store.getActions()).to.eql(expectedActions);
    });
  });
});
