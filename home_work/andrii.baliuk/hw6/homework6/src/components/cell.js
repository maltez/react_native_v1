import React from "react";
import { View } from "react-native";

const Cell = ({ color, size }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        backgroundColor: color,
        borderWidth: 1,
        borderColor: "#000000"
      }}
    />
  );
};

export default Cell;
