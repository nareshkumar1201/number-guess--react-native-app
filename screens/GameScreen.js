import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  ScrollView,
  FlatList,
  Dimensions,
} from "react-native";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";

const generateRandomBetween = (min, max, exclude) => {
  console.log("min : ", min, "max : ", max, "exclude : ", exclude);
  // making number Integer if it is non integer
  //The Math.ceil() function always rounds a number up to the next largest integer
  min = Math.ceil(min);
  //Math.floor() function returns the largest integer less than or equal to a given numbe
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

/*
this renderListItem is used when scrollView component is used

const renderListItem = (items, id, numOfRounds) => {
  return (
    <View key={id} style={styles.listItem}>
      <BodyText>#{numOfRounds}</BodyText>
      <BodyText>{items}</BodyText>
    </View>
  );
};   */

/*this renderListItem function is used when Flat list component is used
as flat list expects array of objects containing key ,which should be string
 */

const renderListItem = (listLength, itemData) => {
  console.log("----------------------------------", itemData);
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );
};

const GameScreen = ({ userChoice, onGameOver }) => {
  const initialGuess = generateRandomBetween(1, 100, userChoice);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess.toString()]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < userChoice) ||
      (direction === "greater" && currentGuess > userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is worng...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //  setRounds((rounds) => rounds + 1);
    setPastGuesses((curPastGuesses) => [
      nextNumber.toString(),
      ...curPastGuesses,
    ]);
  };
  /*as we want to pre-configure the argunment 
  which we will pass to the nextGuessHandler when that function is executed*/
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.btnContainer}>
        <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
          <Ionicons name="md-remove" size={24} color="white" />
        </MainButton>
        <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
          <Ionicons name="md-add" size={24} color="white" />
        </MainButton>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, id) =>
            renderListItem(guess, id, pastGuesses.length - id)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={(item) => item}
          data={pastGuesses}
          renderItem={renderListItem.bind(this, pastGuesses.length + 1)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 500 ? 5 : 20,
    width: 300,
    maxWidth: "80%",
  },
  listContainer: {
    width: "60%",
    flex: 1,
    marginVertical: 10,
  },
  list: {
    // alignItems: "center",
  },
  listItem: {
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 2,
    // backgroundColor: Colors.day,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default GameScreen;
