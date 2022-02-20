import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
/*AppLoading is a component basically prolong the default 
loading screen/user splash screen that user see anyway when app is launching
it will prolong this screen to stay active untill a certain task of our 
choice is done (example untill fetching fonts is done) */
// import { AppLoading } from "expo";
import AppLoading from "expo-app-loading";
/* here we are creating font object bundled all 
font related methods from expo-font package */
import * as Font from "expo-font";

const fetchFonts = () => {
  /* loadAsync is a function on Font package that we imported
  that allow to load fonts,we pass an object to loadAsync where we 
  tell expo/react native about all fonts that we want to load*/
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    /* AppLoading is a component from expo which takes
    startAsync prop where we point at the operation that we
    want to start when this component is rendered
     
    --> Typicall we use <AppLoading /> component to load some assets like 
    fonts and any thing like that , assets that should be there 
    when the app starts
    
    */

    /*
      In startAsync we should pass a function and that function 
      must return a promise , expo will automatically listen
      to that promise for us and when the promise resolves it will 
      know that loading is done and then call onFinish

     */
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  const configureGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  // let content = (
  //   <GameOverScreen
  //     roundsNumber={1}
  //     userNumber={1}
  //     onRestart={configureGameHandler}
  //   />
  // );

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRounds}
        userNumber={userNumber}
        onRestart={configureGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Guess a Number Game" />
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
