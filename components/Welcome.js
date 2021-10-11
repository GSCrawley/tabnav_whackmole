import React, {useEffect, useState} from 'react' 
import { StyleSheet, Text, View, ImageBackground  } from 'react-native'
import GameBoard from './GameBoard'

export default function Welcome() {
	return (
		<ImageBackground 
			style={styles.container}
      source={require('../assets/background.png')}
      >
    <Text style={styles.header}>Welcome </Text>
    <Text style={styles.header}> To </Text>
    <Text style={styles.header}> Whack-A-Troll! </Text>
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
    header: {
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 100,
        color: 'purple'
    }

  });
