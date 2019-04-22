import { expect } from "chai";

import {
  applyDate,
  applyHolidayList,
  applyMonthHolidays
} from "../src/services/reducerFunctions";

describe("Testing of reducers apply functions", () => {
  it("testing of applyDate", () => {
    const date = new Date();
    expect({ date }).to.deep.equal(applyDate({}, date));
  });

  it("testing of applyHolidayList", () => {
    const holidayList = [1, 2, 3];
    expect({ holidayList }).to.deep.equal(applyHolidayList({}, holidayList));
  });

  it("testing of applyMonthHolidays", () => {
    const monthHolidayList = [1, 2, 3];
    expect({
      monthHolidayList
    }).to.deep.equal(applyMonthHolidays({}, monthHolidayList));
  });
});
