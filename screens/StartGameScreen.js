import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Alert,
  Keyboard,
  Dimensions,
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/colors";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
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
      isNaN(confirmedNumber) ||
      confirmedNumber <= 0 ||
      confirmedNumber > 99
    ) {
      Alert.alert("Invalid Number", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetBtnHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedText(confirmedNumber);
    setEnteredText("");
    Keyboard.dismiss();
  };

  let confirmedAlert;

  if (confirmed) {
    confirmedAlert = (
      <Card style={styles.summaryContainer}>
        <Text>You Selected : </Text>
        <NumberContainer>{selectedText}</NumberContainer>
        <MainButton
          onPress={() => {
            props.onStartGame(selectedText);
          }}
        >
          Start Game
        </MainButton>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback>
      <View style={styles.screen}>
        <Text style={styles.title}>Start A New Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.text}>Enter a Number</Text>
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
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: "80%",
    minWidth: 250,
    maxWidth: "95%",
    alignItems: "center",
    marginTop: 20,
    // fontWeight: "bold",
    // fontSize: 18,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: "90%",
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "red",
  },
  btns: {
    //width: "45%",
    minWidth: 80,
    width: Dimensions.get("window").width / 5,
  },
  input: {
    width: "20%",
    textAlign: "center",
  },
  summaryContainer: {
    marginTop: 30,
    alignItems: "center",
  },

  text: {
    fontFamily: "open-sans",
    fontSize: 20,
  },
});

export default StartGameScreen;
