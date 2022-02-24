import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
} from "react-native";
import { version } from "react/cjs/react.production.min";
import Colors from "../constants/colors";
const MainButton = (props) => {
  let ButtonComponent = TouchableOpacity;
  if (Platform.OS === "android" && Platform.version >= 21) {
    ButtonComponent = TouchableNativeFeedback;
  }
  return (
    <View style={styles.buttonContainer}>
      <ButtonComponent activeOpacity={0.6} onPress={props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{props.children}</Text>
        </View>
      </ButtonComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
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
