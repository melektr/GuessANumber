import React , {useState} from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './Header'
import StartGameScreen from './StartGameScreen'
import GameScreen from './GameScreen'
import GameOverScreen from './GameOverScreen'

 const Main = () =>{

    const [userNumber , setUserNumber] = useState()
    const [guessRounds , setGuessRounds] = useState(0)
    const startGameHandler = (selectedNumber) => {
            setUserNumber(selectedNumber)
            setGuessRounds(0)
    }


    const gameOverHandler = (numOfRounds) => {
        setGuessRounds(numOfRounds)
    }

    const playAgainHandler = () =>{
        setGuessRounds(0)
        setUserNumber(null)
    }

    let content = <StartGameScreen  onStartGame={startGameHandler}  />
    if (userNumber && guessRounds <= 0) {
        content = <GameScreen userChoice={userNumber} onGameOver= {gameOverHandler}/>
    } else if (guessRounds > 0) {
        content = <GameOverScreen 
        roundsNumber= {guessRounds} 
        userNumber={userNumber}
        onPlayAgain={playAgainHandler} />
    }


    return(
        <View style={styles.screen}>
            <Header title='Guess A Number'/>
            {content}
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,      
    }
})

export default Main