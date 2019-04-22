import React, { Component } from "react";
import { View } from "react-native";
import Board from "./src/components/board";
import AppStyles from "./src/styles/AppStyle";

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <View style={AppStyles.container}>
        <Board />
      </View>
    );
  }
}

export default App;
