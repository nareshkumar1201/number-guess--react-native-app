import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Color from "../constants/colors";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Color.primary,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NumberContainer;
