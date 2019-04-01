import React, { Component } from "react";
import { View, Dimensions, Button } from "react-native";
import Cell from "./cell";
import BoardStyle from "../styles/BoardStyle";

const cellNumber = 8;

function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function generateArrayOfCollors() {
  let colors = [];
  for (let i = 0; i < cellNumber; ++i) {
    let row = [];
    for (let j = 0; j < cellNumber; ++j) {
      row.push(randomHexColor());
    }
    colors.push(row);
  }

  return colors;
}

class Board extends Component {
  constructor(props) {
    super(props);

    const width = Dimensions.get("window").width;
    this.cellSize = parseInt(width / cellNumber, 10);
    this.size = this.cellSize * cellNumber;

    this.state = {
      colors: generateArrayOfCollors()
    };
  }

  handelOnPress = () => {
    this.setState({
      colors: generateArrayOfCollors()
    });
  };

  renderCells = (rowOfColors, indexRow) => {
    return rowOfColors.map((color, indexCol) => (
      <Cell
        key={`${indexRow}-${indexCol}`}
        color={color}
        size={this.cellSize}
      />
    ));
  };

  renderRow = () => {
    const { size, cellSize } = this;
    const { colors } = this.state;

    return colors.map((colorRow, indexRow) => (
      <View
        key={`row-${indexRow}`}
        style={[
          BoardStyle.boardRow,
          {
            width: size,
            height: cellSize
          }
        ]}
      >
        {this.renderCells(colorRow, indexRow)}
      </View>
    ));
  };

  render() {
    const { size } = this;
    return (
      <View
        style={[
          BoardStyle.boardConatiner,
          {
            width: size,
            height: size
          }
        ]}
      >
        {this.renderRow()}
        <Button title="Interactive ^_^" onPress={this.handelOnPress} />
      </View>
    );
  }
}

export default Board;
