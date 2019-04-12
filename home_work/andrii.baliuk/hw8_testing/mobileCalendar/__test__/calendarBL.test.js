import { expect } from "chai";

import {
  getTypeOfHolidey,
  getStyleByHolidayType,
  getMonthDays,
  isWeekend,
  isToday,
  getDateInfo
} from "../src/services/calendarBL";
import calendarStyles from "../src/styles/CalendarStyles";

describe("Testing of calendarBL", () => {
  it("isToday - expcted true", () => {
    const date = new Date();
    expect(isToday(date.getDate(), date)).to.be.equal(true);
  });

  it("isToday - expected false", () => {
    const date = new Date(2015, 3, 3);
    expect(isToday(date.getDate(), date)).to.be.equal(false);
  });

  it("getMonthDays expected array of days for April 2019", () => {
    const date = new Date(2019, 3);
    const expected = [
      ["", 1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12, 13],
      [14, 15, 16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25, 26, 27],
      [28, 29, 30]
    ];

    expect(getMonthDays(date)).to.deep.equal(expected);
  });

  it("isWeekend - input 2019, 3, 7 expected true", () => {
    const date = new Date(2019, 3, 7);
    expect(isWeekend(date, date.getDate())).to.be.equal(true);
  });

  it("isWeekend - input '' expected false", () => {
    expect(isWeekend(new Date(), "")).to.be.equal(false);
  });

  it("isWeekend - input 2019, 3, 8 expected false", () => {
    const date = new Date(2019, 3, 8);
    expect(isWeekend(date, date.getDate())).to.be.equal(false);
  });

  it("getDateInfo - dataInfo", () => {
    const date = new Date(2019, 3, 1); // 1 April 2019

    const dataInfo = {
      name: "April Fools",
      description:
        "April Fool\u2019s Day is celebrated as a day of jokes and trickery on April 1 in Ukraine.",
      date: {
        iso: "2019-04-01",
        datetime: { year: 2019, month: 4, day: 1 }
      },
      type: ["Observance"],
      locations: "All",
      states: "All"
    };

    const holidayList = [dataInfo];
    expect(getDateInfo(holidayList, date, date.getDate())).to.deep.equal(
      dataInfo
    );
  });

  it("getDateInfo - undefined", () => {
    const date = new Date(2019, 3, 2); // 2 April 2019

    const dataInfo = {
      name: "April Fools",
      description:
        "April Fool\u2019s Day is celebrated as a day of jokes and trickery on April 1 in Ukraine.",
      date: {
        iso: "2019-04-01",
        datetime: { year: 2019, month: 4, day: 1 }
      },
      type: ["Observance"],
      locations: "All",
      states: "All"
    };

    const holidayList = [dataInfo];
    expect(getDateInfo(holidayList, date, date.getDate())).to.deep.equal(
      undefined
    );
  });

  it("getTypeOfHolidey put [] expcted {}", () => {
    expect(getTypeOfHolidey([])).to.deep.equal({});
  });

  it('getTypeOfHolidey put ["National holiday","Orthodox","Clock change/Daylight Saving Time","Observance","Season"] expcted National style', () => {
    const typeArray = [
      "National holiday",
      "Orthodox",
      "Clock change/Daylight Saving Time",
      "Observance",
      "Season"
    ];
    expect(getTypeOfHolidey(typeArray)).to.deep.equal(
      calendarStyles.isNational
    );
  });

  it('getTypeOfHolidey put ["Orthodox","Clock change/Daylight Saving Time","Observance","Season"] expcted Ortodox style', () => {
    const typeArray = [
      "Orthodox",
      "Clock change/Daylight Saving Time",
      "Observance",
      "Season"
    ];
    expect(getTypeOfHolidey(typeArray)).to.deep.equal(calendarStyles.isOrtodox);
  });

  it('getTypeOfHolidey put ["Clock change/Daylight Saving Time","Observance","Season"] expcted ClockTime style', () => {
    const typeArray = [
      "Clock change/Daylight Saving Time",
      "Observance",
      "Season"
    ];
    expect(getTypeOfHolidey(typeArray)).to.deep.equal(
      calendarStyles.isClockTime
    );
  });

  it('getTypeOfHolidey put ["Observance","Season"] expcted Observance style', () => {
    const typeArray = ["Observance", "Season"];
    expect(getTypeOfHolidey(typeArray)).to.deep.equal(
      calendarStyles.isObservance
    );
  });

  it('getTypeOfHolidey put ["Season"] expcted Season style', () => {
    const typeArray = ["Season"];
    expect(getTypeOfHolidey(typeArray)).to.deep.equal(calendarStyles.isSeason);
  });

  //
  it("getStyleByHolidayType put '' expcted {} style", () => {
    expect(getStyleByHolidayType("")).to.deep.equal({});
  });

  it('getStyleByHolidayType put "National holiday" expcted National style', () => {
    expect(getStyleByHolidayType("National holiday")).to.deep.equal(
      calendarStyles.isNational
    );
  });

  it('getStyleByHolidayType put "Orthodox" expcted Ortodox style', () => {
    expect(getStyleByHolidayType("Orthodox")).to.deep.equal(
      calendarStyles.isOrtodox
    );
  });

  it('getStyleByHolidayType put "Clock change/Daylight Saving Time" expcted ClockTime style', () => {
    expect(
      getStyleByHolidayType("Clock change/Daylight Saving Time")
    ).to.deep.equal(calendarStyles.isClockTime);
  });

  it('getStyleByHolidayType put "Observance" expcted Observance style', () => {
    expect(getStyleByHolidayType("Observance")).to.deep.equal(
      calendarStyles.isObservance
    );
  });

  it('getStyleByHolidayType put "Season" expcted Season style', () => {
    expect(getStyleByHolidayType("Season")).to.deep.equal(
      calendarStyles.isSeason
    );
  });
});
