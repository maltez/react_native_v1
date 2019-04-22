import React, { Component } from "react";
import { View, Text } from "react-native";
import { getStyleByHolidayType } from "../services/calendarBL";

import styles from "../styles/DayDetails";

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
            <View style={styles.date}>
              <Text style={styles.dateTitle}>{`${dateInfo.date.datetime.year}-${
                dateInfo.date.datetime.month
              }-${dateInfo.date.datetime.day}`}</Text>
            </View>
            <View style={styles.title}>
              <Text style={styles.titleName}>{dateInfo.name}</Text>
            </View>
            <View style={styles.description}>
              <Text>{dateInfo.description}</Text>
            </View>

            {dateInfo.type.map(type => (
              <View
                key={type}
                style={[styles.infoType, getStyleByHolidayType(type)]}
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
