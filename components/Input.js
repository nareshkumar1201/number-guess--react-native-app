import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Input = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.default,
    marginVertical: 10,
  },
});

export default Input;
