import React from 'react'
import { StyleSheet, View, Button, Image } from 'react-native'
import BodyText from './BodyText'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <BodyText style={{ fontFamily: 'OpenSans-Bold' }}>The Game Is Over ! </BodyText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../Images/success.png')}
                    style={styles.image}
                    resizeMode='cover'
                />
            </View>
            <BodyText>Number of Rounds : {props.roundsNumber}</BodyText>
            <BodyText>The number was : {props.userNumber}</BodyText>
            <Button title='Play Again' onPress={props.onPlayAgain} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: "black",
        overflow: 'hidden',
        marginVertical: 30
    },
    image: {
        width: '100%',
        height: '100%'
    }

})

export default GameOverScreen