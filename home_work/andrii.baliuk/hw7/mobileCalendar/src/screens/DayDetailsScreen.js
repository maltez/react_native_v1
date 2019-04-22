import React, { Component } from "react";
import { View, Text } from "react-native";
import calendarStyles from "../styles/CalendarStyles";

import styles from "../styles/DayDetails";

const getTypeOfHolidey = type => {
  if (type === "National holiday") {
    return calendarStyles.isNational;
  }
  if (type === "Orthodox") {
    return calendarStyles.isOrtodox;
  }
  if (type === "Clock change/Daylight Saving Time") {
    return calendarStyles.isClockTime;
  }
  if (type === "Observance") {
    return calendarStyles.isObservance;
  }
  if (type === "Season") {
    return calendarStyles.isSeason;
  }

  return {};
};

const DateTime = ({ date }) => {
  const { datetime } = date;

  return (
    <View style={styles.date}>
      <Text style={styles.dateTitle}>{`${datetime.year}-${datetime.month}-${
        datetime.day
      }`}</Text>
    </View>
  );
};

class DayDetailsScreen extends Component {
  static navigationOptions = {
    title: "Month Details"
  };

  render() {
    const { navigation } = this.props;
    const dateInfo = navigation.getParam("dateInfo", undefined);

    return (
      <View style={styles.container}>
        {dateInfo && (
          <View>
            <DateTime date={dateInfo.date} />
            <View style={styles.title}>
              <Text style={styles.titleName}>{dateInfo.name}</Text>
            </View>
            <View style={styles.description}>
              <Text>{dateInfo.description}</Text>
            </View>

            {dateInfo.type.map(type => (
              <View
                key={type}
                style={[styles.infoType, getTypeOfHolidey(type)]}
              >
                <Text>{type}</Text>
              </View>
            ))}
          </View>
        )}
      </View>
    );
  }
}

export default DayDetailsScreen;
