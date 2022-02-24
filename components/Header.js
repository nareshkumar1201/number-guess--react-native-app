import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Colors from "../constants/colors";
const Header = (props) => {
  const { title } = props;
  return (
    <View
      style={{
        ...styles.headerBase,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: "100%",
    height: 90,
    paddingTop: 20,
    //backgroundColor: Platform.OS === "android" ? Colors.primary : Colors.day,
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: Colors.day,
    borderBottomColor: Colors.outline,
    borderBottomWidth: 1,
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    // borderBottomColor: "transparent",
    // borderBottomWidth: 1,
  },
  headerTitle: {
    color: Colors.day,
    fontSize: 18,
    padding: 10,
    fontFamily: "open-sans-bold",
  },
});
export default Header;
