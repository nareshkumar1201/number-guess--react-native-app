import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
} from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";
const GameOverScreen = (props) => {
  /*loading local images we use require('relativepath')

   <Image source={require("../assets/success.png")} />

   loading web images we use :
    <Image source={{uri:"link goes here"}} />
   */
  return (
    <View style={styles.screen}>
      <BodyText style={styles.resultText}>
        <Text style={styles.highlight}>GameOver ...!!</Text>
      </BodyText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={300}
          resizeMode="cover"
          source={require("../assets/success.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your Phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </BodyText>
      </View>

      <MainButton onPress={props.onRestart}> Start New Game </MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    // width: 200,
    // height: 200,
    width: Dimensions.get("window").width < 500 ? 100 : 200,
    height: Dimensions.get("window").height < 550 ? 100 : 200,
    borderRadius: Dimensions.get("window").height < 400 ? 50 : 100,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    width: "80%",
    padding: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  resultText: {
    width: "100%",
    textAlign: "center",
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
