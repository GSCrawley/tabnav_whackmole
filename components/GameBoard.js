import React, {useEffect, useState} from 'react' 
import { StyleSheet, Text, View, ImageBackground  } from 'react-native'
import Square from './Square.js'
import { connect } from 'react-redux'



function GameBoard(props)  {
    const [timeLeft, setTimeLeft] = useState(60)
    const [gameOver, setGameOver] = useState(false)

    useEffect(() => {
        if(!timeLeft)  {
            setGameOver(true)
            return
        }
        const timerId = setInterval(() => {
            //happens every 1000ms
            setTimeLeft(timeLeft -1)
        },800)
        return () => clearInterval(timerId)
    }, [timeLeft])
    
    return (
        <ImageBackground 
        style={styles.container}
        source={require('../assets/background.png')}
        >
        <Text style={styles.header}>Go on, whack him!</Text>
        <Text style={styles.header}>(you know you want to)</Text>

        <Text>You have {timeLeft} seconds left</Text>
        <Text>{props.score} Moles whacked!</Text>
        <View style={styles.game}>
        <Square gameOver={gameOver}/>
        <Square gameOver={gameOver}/>        
        <Square gameOver={gameOver}/>        
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>          
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>  
        <Square gameOver={gameOver}/>  
        </View>
      </ImageBackground>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    game: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 300,
      paddingTop: 20,
      marginBottom:20
    },
    header: {
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 10,
        // marginTop: 20,
        color: 'purple'

    }

  });

  const mapStateToProps = state => {
      return {
          score: state.score
      }
  }

  export default connect(mapStateToProps)(GameBoard)