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
    TouchableWithoutFeedback
} from 'react-native';

import X from './X'
import O from './O'
import Prompt from './Prompt'
import {SQUARES,AREAS,CONDITIONS} from "../constants/Game";

let playerXInputs = [];
let playerOInputs = [];

// if result === -1, game continue,
// if result === 0, player1 win
//if result === 1 player2 win
//if result === 2 tie
export default class GameBoard extends Component<{}> {

    state: {
        playerXInpts: [],
        playerOInpts: [],
        xTurn: boolean,
        result: number
    }

    constructor() {
        super();
        this.state={playerXInputs: [], playerOInputs: [], xTurn: true, result: -1}
    }

    restart() {
        this.setState({
            playerXInputs: [],
            playerOInputs: [],
            xTurn: true,
            result: -1,

        })

    }

    updatingItem(){
        //this.props.updateItem(this.state)
        //this.forceUpdate()
    }
    boardClickHandler(e: Object) {
        const { locationX, locationY } = e.nativeEvent;
        const {playerXInputs, playerOInputs, xTurn, result} = this.state;

        if (result !==-1) {
            return
        }

        const inputs = playerXInputs.concat(playerOInputs)

        const area = AREAS.find(d =>
            (locationX>=d.startX && locationX<=d.endX) &&
            (locationY>=d.startY && locationY<=d.endY));


        if(area && inputs.every(d => d !== area.id)) {
            if (xTurn) {
                //console.log('setting the state on xs turn')
                this.setState({ playerXInputs: playerXInputs.concat(area.id)},
                    this.updatingItem(this.state)
            )
            }
            else {
                //console.log('setting the state on os turn')
                this.setState({ playerOInputs: playerOInputs.concat(area.id)})
            }
            //this.props.updateItem(this.state)
            //this.forceUpdate().
            //console.log('concat: '+playerXInputs.concat(playerOInputs))
            this.judgeWinner(area.id)
            this.setState({xTurn: !xTurn})
        }
    }

    componentDidMount() {
        this.restart()
    }

    componentsDidUpdate() {
        console.log(`122`)
    }
    isWinner(inputs: number[]) {
        console.log('conditions ' + CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1)))
        return CONDITIONS.some(d => d.every(item => inputs.indexOf(item) !== -1))
    }

    /*judgeWinner() {
        const { playerXInputs, playerOInputs, result } = this.state
        const inputs = playerXInputs.concat(playerOInputs)

        if (inputs.length >= 5) {
            let res = this.judgeWinner(playerXInputs)
            if (res) {
                this.setState({result: 0})

            }
            res = this.judgeWinner(playerOInputs)
            if (res) {
                this.setState({result: 1})

            }
        }
        if (inputs.length === 9 && result !== 2) {
            this.setState({result: 2})
        }

    }*/

    /*judgeWinner(num) {
        const { playerXInputs, playerOInputs, result, xTurn } = this.state
        const inputs = playerXInputs.concat(playerOInputs)

        let checkXInputs: []
        let checkOInputs: []

        let checkInputs: []

        if (xTurn) {
            checkXInputs: playerXInputs.concat(num)
            checkInputs: checkXInputs.concat(playerOInputs)
        }
        else {
            checkOInputs: playerOInputs.concat(num)
            checkInputs: checkOInputs.concat(playerXInputs)
        }
        //const checkInputs = checkXInputs.concat(checkOInputs)

        res: false

        console.log('in judgeWinner');
        console.log('checkXIntputs = ' + checkInputs)
        console.log('checkOIntputs = ' + checkInputs)
        console.log('checkIntputs = ' + checkInputs)
        console.log('checkIntputs.length = ' + checkInputs.length)

        if (checkInputs.length >= 5 ) {
            res = this.isWinner(checkXInputs)
            console.log('res ' + res);
            if (res && result !== 0) {
                console.log('setting x to winner');
                return this.setState({ result: 0 })
            }
            res = this.isWinner(checkOInputs)
            if (res && result !== 1) {
                return this.setState({ result: 1 })
            }
        }

        if (checkInputs.length === 9 && result === -1) {
            this.setState({result: 2})
        }
    }*/

    judgeWinner(num) {
        const { playerXInputs, playerOInputs, result, xTurn } = this.state
        //const inputs = playerXInputs.concat(playerOInputs)
        res: false
        //console.log('moves = ' + playerXInputs.length + playerOInputs.length + 1)
        if (playerXInputs.length+playerOInputs.length+1 >= 5) {

            if (xTurn) {

                console.log(playerXInputs.concat(num))
                res = this.isWinner(playerXInputs.concat(num))
                if (res && result !==0) {
                    return this.setState({result: 0})
                }
            }

            else {
                console.log(playerOInputs.concat(num))
                res = this.isWinner(playerOInputs.concat(num))
                if (res && result !== 1) {
                    return this.setState({result: 1})
                }


            }
            if (playerXInputs.length + playerOInputs.length + 1 === 9 && result === -1) {
                return this.setState({result: 2})
            }
        }

    }



    render() {
        const { playerXInputs, playerOInputs, xTurn, result } = this.state;
        //console.log('X: '+playerXInputs)
        //console.log('O: '+playerOInputs)
        //console.log('concat: '+playerXInputs.concat(playerOInputs))
        console.log(result);
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
                    <View style={styles.board}>

                            <View
                            style={{
                                width: 3,
                                height: 306,
                                backgroundColor:'#000',
                                transform : [
                                    {translateX: 100}
                                ]
                            }}
                            />

                            <View
                                style={{
                                    position: 'absolute',
                                    width: 3,
                                    height: 306,
                                    backgroundColor:'#000',
                                    transform : [
                                        {translateX: 200}
                                    ]
                                }}
                            />

                            <View
                                style={{
                                    position: 'absolute',
                                    width: 306,
                                    height: 3,
                                    backgroundColor:'#000',
                                    transform : [
                                        {translateY: 100}
                                    ]
                                }}
                            />

                            <View
                                style={{
                                    position: 'absolute',
                                    width: 306,
                                    height: 3,
                                    backgroundColor:'#000',
                                    transform : [
                                        {translateY: 200}
                                    ]
                                }}
                            />


                            {
                                playerXInputs.map((d, i)=> (
                                    <X
                                        key={i}
                                        xTranslate={SQUARES[d].x}
                                        yTranslate={SQUARES[d].y}/>
                                ))
                            }


                        {
                            playerOInputs.map((d, i)=> (
                                <O
                                    key={i}
                                xTranslate={SQUARES[d].x}
                                yTranslate={SQUARES[d].y}/>
                            ))
                        }






                    </View>
                </TouchableWithoutFeedback>
                <Prompt result={result} onRestart={() => this.restart()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        //flexDirection: 'row',
        //backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center'
    },
    board: {
        width: 312,
        height: 312,
        borderWidth: 3,
        borderColor: '#000',
    }
});
