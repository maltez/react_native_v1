import React, { Component } from 'react';
import Month from './Month';
import Clock from './Clock';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

class Calendar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date()
    };
  }

  onNext = () => {
    const { date } = this.state;
    if (date.getMonth() === 11) {
      this.setState({
        date: new Date(date.getFullYear() + 1, 0, 1)
      });
    } else {
      this.setState({
        date: new Date(date.getFullYear(), date.getMonth() + 1, 1)
      });
    }
  };

  onPrev = () => {
    const { date } = this.state;
    if (date.getMonth() === 0) {
      this.setState({
        date: new Date(date.getFullYear() - 1, 11, 1)
      });
    } else {
      this.setState({
        date: new Date(date.getFullYear(), date.getMonth() - 1, 1)
      });
    }
  };

  onTodayClick = () => {
    this.setState({
      date: new Date()
    });
  };

  render() {
    const { date } = this.state;

    const year = date.getFullYear();
    const month = date.getMonth();
    const firstMonthDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return (
      <div>
        <Clock />

        <div>
          <button type="button" onClick={this.onPrev}>
            Prev Month
          </button>
          <button type="button" onClick={this.onNext}>
            Next Month
          </button>
          <button type="button" onClick={this.onTodayClick}>
            Today
          </button>
        </div>

        <h2>
          Calendar: {monthNames[month]} {year}
        </h2>
        <Month
          year={year}
          monthIndex={month}
          daysInMonth={daysInMonth}
          firstMonthDay={firstMonthDayIndex}
        />
      </div>
    );
  }
}

export default Calendar;
