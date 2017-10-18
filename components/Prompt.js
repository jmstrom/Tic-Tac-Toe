/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native'



export default class Prompt extends Component {
    generateResultText(result: number) {
        switch (result) {
            case 0:
                return 'X wins!'
            case 1:
                return 'O wins!'
            case 2:
                return 'Tie!'
            default:
                return ''
        }
    }

    render() {
        const { result, onRestart } = this.props
        console.log(result);
        return (
            <View>
                <Text style={styles.text}>{ this.generateResultText(result) }</Text>
                {
                    result !== -1 && (
                        <TouchableOpacity onPress={() => onRestart()}>
                            <Text style={styles.instructions}>
                                Touch here to play again
                            </Text>
                        </TouchableOpacity>
                    )
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        marginTop: 20,
        fontSize: 19,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    instructions: {
        marginTop: 20,
        color: 'grey',
        marginBottom: 5,
        textAlign: 'center'
    },
})