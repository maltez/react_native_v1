import React, { Component } from "react";
import { View, Button } from "react-native";
import { connect } from "react-redux";
import Title from "../components/CalendarTitle";
import Month from "../components/Month";
import {
  doSetCurrentDate,
  doSetPrevMonth,
  doSetNextMonth,
  doSetPrevYear,
  doSetNextYear,
  doUpdateHolidays
} from "../store/action/calendarActions";

import calendarStyles from "../styles/CalendarStyles";

class Calendar extends Component {
  static navigationOptions = {
    header: null
  };

  componentDidMount() {
    this.props.doUpdateHolidayList();
  }

  onGetMonthDatails = () => {
    const { monthHolidayList } = this.props;
    this.props.navigation.navigate("MonthDetails", {
      monthInfo: monthHolidayList
    });
  };

  onPressDay = dateInfo => {
    if (dateInfo) {
      this.props.navigation.navigate("DayDetails", {
        dateInfo: dateInfo
      });
    }
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

    return (
      <View style={calendarStyles.container}>
        <View style={calendarStyles.calendarContainer}>
          <View>
            <Title date={date} />
            <Month
              date={date}
              monthHolidayList={monthHolidayList}
              onPressDay={this.onPressDay}
            />
          </View>
          <View>
            {monthHolidayList && monthHolidayList.length > 0 && (
              <View style={calendarStyles.getMonthInfoBtn}>
                <Button
                  title="Get Month Info"
                  onPress={this.onGetMonthDatails}
                />
              </View>
            )}

            <View style={calendarStyles.buttonControls}>
              <Button title="<<" onPress={onPrevYear} />
              <Button title="<" onPress={onPrevMonth} />
              <Button title="Today" onPress={onToday} />
              <Button title=">" onPress={onNextMonth} />
              <Button title=">>" onPress={onNextYear} />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  date: state.calendarState.date,
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
