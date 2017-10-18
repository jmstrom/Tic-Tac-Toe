/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
    TouchableOpacity
} from 'react-native';

import Header from './components/Header'
import GameBoard from './components/GameBoard'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {

  constructor(props){
    super(props)
      this.state={gameStarted:false}
  }

  startGame() {
    this.setState({gameStarted: true})
  }

  render() {
    const { gameStarted } = this.state
    return (
      <View style={styles.container}>
        <Header/>
          {
            gameStarted ? (
              <GameBoard />
            ) : (
              <View>
                <Text style={styles.welcome}>
                  Welcome to the game!
                </Text>
                <TouchableOpacity onPress={() => this.startGame()}>
                  <Text style={styles.instructions}>
                    Click here to start
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 50,
  },
  instructions: {
    marginTop: 20,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 5,
  },
});
