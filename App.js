import * as React from 'react';
import { StyleSheet } from 'react-native';
import Welcome from './components/Welcome';
import GameBoard from './components/GameBoard';
import { getFocusedRouteNameFromRoute, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from './redux/store'

import { Ionicons } from  'react-native-vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused 
              ? 'ios-home'
              : 'ios-home-outline';
          } else if (route.name === 'Game') {
            iconName = focused 
            ? 'hammer-outline' : 'hammer'
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
>

    
        <Tab.Screen name="Home" component={Welcome} />
        <Tab.Screen name="Game" component={GameBoard} />

   
    
 </Tab.Navigator>
 </NavigationContainer>
 
  </Provider>
  );
 
}


