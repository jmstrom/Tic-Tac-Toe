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
    View
} from 'react-native';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class X extends Component<{}> {
    render() {
        const {xTranslate, yTranslate} = this.props
        return (
            <View style={[styles.container,
                {transform: [
                    {translateX: (xTranslate ? xTranslate:10)},
                    {translateY: (yTranslate ? yTranslate:10) }
                ]
                }]}>


                <Text style={styles.xStyle}>X</Text>
            </View>


        );
    }
}

const styles = StyleSheet.create({
    container: {
        //marginTop: 20,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        //backgroundColor: '#000',

    },
    line: {
        position: 'absolute',
        backgroundColor: "#000",
        width: 8,
        height: 105,


    },
    xStyle: {
        position: 'absolute',
        color: '#000',
        fontSize: 72,
        alignItems: 'center',
        justifyContent: 'center',

    }

});
