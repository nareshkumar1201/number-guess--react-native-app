import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
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
    paddingVertical: Dimensions.get("window").width < 500 ? 10 : 10,
    paddingHorizontal: Dimensions.get("window").width < 500 ? 15 : 20,
    borderRadius: Dimensions.get("window").width < 500 ? 10 : 25,
  },
  buttonText: {
    color: Colors.day,
    fontFamily: "open-sans",
    fontSize: 18,
  },
});
export default MainButton;
