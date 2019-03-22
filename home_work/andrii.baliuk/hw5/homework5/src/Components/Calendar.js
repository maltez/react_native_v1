import React, { Component } from "react";
import { connect } from "react-redux";
import Month from "./Month";
import Clock from "./Clock";

import {
  doSetCurrentDate,
  doSetPrevMonth,
  doSetNextMonth,
  doSetPrevYear,
  doSetNextYear,
  doUpdateHolidays
} from "../store/action/calendarActions";

const monthNames = [
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

class Calendar extends Component {
  componentDidMount() {
    this.props.doUpdateHolidayList();
  }

  renderHolidaysOfMonth = () => {
    const { monthHolidayList } = this.props;

    return monthHolidayList.map(data => {
      return (
        <div className="row border rounded mt-2 mb-2">
          <div className="col-3">{data.date.iso}</div>
          <div className="col-3">{data.name}</div>
          <div className="col-3">{data.description}</div>
          <div className="col-3">
            {data.type.map(item => (
              <div>{item}</div>
            ))}
          </div>
        </div>
      );
    });
  };

  render() {
    const {
      monthHolidayList,
      date,
      onToday,
      onPrevMonth,
      onNextMonth,
      onPrevYear,
      onNextYear
    } = this.props;

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstMonthDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-6">
            <div className="card" style={{ width: "400px" }}>
              <div className="card-body">
                <div className="d-flex justify-content-center">
                  <h5 className="card-title">
                    {monthNames[month]} {year}
                  </h5>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onPrevYear}
                  >
                    {"<<"}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onPrevMonth}
                  >
                    {"<"}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onToday}
                  >
                    Today
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onNextMonth}
                  >
                    {">"}
                  </button>
                  <button
                    className="btn btn-light"
                    type="button"
                    onClick={onNextYear}
                  >
                    {">>"}
                  </button>
                </div>
                <Month
                  monthHolidayList={monthHolidayList}
                  year={year}
                  monthIndex={month}
                  daysInMonth={daysInMonth}
                  firstMonthDay={firstMonthDayIndex}
                />
              </div>
            </div>
          </div>
          <div className="col-5">
            <Clock />
          </div>
        </div>

        <div className="mt-3">
          <div className="row border rounded mt-2 mb-2 font-weight-bold bg-secondary">
            <div className="col-3">Date</div>
            <div className="col-3">Name</div>
            <div className="col-3">Description</div>
            <div className="col-3">Type</div>
          </div>
          {this.renderHolidaysOfMonth()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  date: state.calendarState.date,
  holidayList: state.calendarState.holidayList,
  monthHolidayList: state.calendarState.monthHolidayList
});

const mapDispatchToProps = dispatch => ({
  onToday: () => dispatch(doSetCurrentDate()),
  onPrevMonth: () => dispatch(doSetPrevMonth()),
  onNextMonth: () => dispatch(doSetNextMonth()),
  onPrevYear: () => dispatch(doSetPrevYear()),
  onNextYear: () => dispatch(doSetNextYear()),
  doUpdateHolidayList: () => dispatch(doUpdateHolidays())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar);
