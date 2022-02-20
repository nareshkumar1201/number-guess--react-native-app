import React from "react";
import { Text, StyleSheet } from "react-native";
const BodyText = (props) => {
  return (
    <Text style={{ ...styles.body, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  body: {
    width: "80%",
    fontFamily: "open-sans",
    fontSize: 20,
  },
});

export default BodyText;
