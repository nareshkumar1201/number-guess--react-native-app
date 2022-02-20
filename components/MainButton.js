import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Colors from "../constants/colors";
const MainButton = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: Colors.day,
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
export default MainButton;
