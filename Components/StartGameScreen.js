import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Card } from './Card'
import Colors from '../Constants/Colors'
import { Input } from './Input'
import { NumberContainer} from './NumberContainer'
import  BodyText from './BodyText'
const StartGameScreen = props => {
    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetNumberHandler = () => {
        setEnteredValue('')
        setConfirmed(false)
    }


    const confirmInputHandler = () => {
        const chosenNumber = (parseInt(enteredValue))
        if (isNaN(chosenNumber)|| chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid number', 
            'Choose a number between 1 and 99 ',
             [{text: 'Okay ',style:'destructive' , onPress: resetNumberHandler}])
        }
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }
    let confirmedOutput 
    
    if (confirmed) {
    confirmedOutput = (
        <Card style={styles.summaryContainer}>
            <Text>You Selected </Text>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <Button title='START GAME' onPress={()=> props.onStartGame(selectedNumber)}  ></Button>
    </Card>
    )}

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game ! </Text>
                <Card style={styles.inputContainer}>
                    <BodyText >Select a Number</BodyText>
                    <Input style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title='Reset' color={Colors.accent} onPress={resetNumberHandler}>
                            </Button>
                        </View>
                        <View style={styles.button}>
                            <Button title='Confirm' color={Colors.primary} onPress={confirmInputHandler}>
                            </Button>
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'OpenSans-Bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }, 
    startButton : {
        width: 80, 
        height: 40 , 
        borderRadius : 10 ,
        color: '#c71585'
    },
    summaryContainer: {
        marginTop :20,
        alignItems :'center'
    }
})

export default StartGameScreen