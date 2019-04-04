import React, { Component } from "react";
import { View, FlatList, Text } from "react-native";
import { getStyleByHolidayType } from "../services/calendarBL";

import styles from "../styles/MonthDetails";

const DateTime = ({ datetime }) => {
  return (
    <View style={styles.date}>
      <Text>{`${datetime.year}-${datetime.month}-${datetime.day}`}</Text>
    </View>
  );
};

const DateInfo = ({ name, description, types }) => {
  return (
    <View style={styles.info}>
      <Text style={styles.infoName}>{name}</Text>
      <Text>{description}</Text>
      {types.map(type => {
        return (
          <View
            key={type}
            style={[styles.infoType, getStyleByHolidayType(type)]}
          >
            <Text>{type}</Text>
          </View>
        );
      })}
    </View>
  );
};

class MonthDetailsScreen extends Component {
  static navigationOptions = {
    title: "Month Details"
  };

  render() {
    const { navigation } = this.props;
    const monthInfo = navigation.getParam("monthInfo", []);

    return (
      <View>
        <FlatList
          style={styles.listContainer}
          data={monthInfo}
          renderItem={({ item }) => {
            const {
              date: { datetime },
              name,
              description,
              type
            } = item;
            return (
              <View key={item.date.iso} style={styles.dateInfoContainer}>
                <DateTime datetime={datetime} />
                <DateInfo name={name} description={description} types={type} />
              </View>
            );
          }}
          keyExtractor={item => item.date.iso}
        />
      </View>
    );
  }
}

export default MonthDetailsScreen;
