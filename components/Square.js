import React, { useEffect, useState, useRef } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { connect } from 'react-redux'
import { addScore } from './../redux'

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }
  
const Square = (props) => {
    const [moleActive, setMoleActive] = useState(false)

    const randomTime = Math.random() * 1000
    let timerId

    useInterval(() => {
        // Is the mole visible?
        // If yes, hide it!
        // If not, let's (maybe) show it!
       
        if (moleActive) {
            setMoleActive(false)
        } else if (props.gameOver === false) {
            const n = Math.random() 
            if (n < 0.24) {
                setMoleActive(true)
            } 
        } 
       
      }, 1000);



    return (
        <TouchableOpacity onPress={moleActive? props.addScore : null}>
            <Image 
            source={moleActive? require('../assets/TrumpInAHole.png'): require('../assets/hole.png')} 
            style={moleActive? styles.mole : styles.square}>
            </Image>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    square: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor: '#9BF89C',
        width: '100%'

    },
    mole: {
        flex: 1,
        minWidth: 80,
        minHeight: 80,
        margin: 10, 
        backgroundColor:'#9BF89C',
        width: '100%'
    },
    x: {
        fontWeight: 'bold',
        fontSize: 65,
        textAlign: 'center',
    }
})

const mapStateToProps = state => {
    return {
        score: state.score
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addScore: () => dispatch(addScore())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Square)