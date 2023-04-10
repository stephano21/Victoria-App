import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native'
// Components
import MyStack from './src/navigation/Navigation'


export default function App() {
  return (
    <NavigationContainer>
        <MyStack/>
    </NavigationContainer>
  );
  
}

