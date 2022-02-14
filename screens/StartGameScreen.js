import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";

const StartGameScreen = () => {
  const [enteredText, setEnteredText] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedText, setSelectedText] = useState();
  const numberInputHandler = (inputText) => {
    setEnteredText(inputText.replace(/[^0-9]/g, ""));
  };

  const resetBtnHandler = () => {
    setEnteredText("");
    setConfirmed(false);
  };

  const confirmBtnHandler = () => {
    const confirmedNumber = parseInt(enteredText);
    if (
      confirmedNumber === NaN ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      return;
    }
    setConfirmed(true);
    setSelectedText(confirmedNumber);
    setEnteredText("");
  };

  let confirmedAlert;

  if (confirmed) {
    confirmedAlert = <Text>Confirmed Text: {selectedText}</Text>;
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredText}
          />
          <View style={styles.btnContainer}>
            <View style={styles.btns}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetBtnHandler}
              />
            </View>
            <View style={styles.btns}>
              <Button
                title="Confirm "
                color={Colors.primary}
                onPress={confirmBtnHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedAlert}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    alignItems: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "80%",
    paddingHorizontal: 15,
  },
  btns: {
    width: "45%",
  },
  input: {
    width: "20%",
    textAlign: "center",
  },
});

export default StartGameScreen;
