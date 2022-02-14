import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
const styles = StyleSheet.create({
  card: {
    elevation: 8,
    shadowColor: Colors.night,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    backgroundColor: Colors.day,
    padding: 15,
    borderRadius: 5,
  },
});

export default Card;
