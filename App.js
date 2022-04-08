/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Routes from './src/navigation/Routes';
import HomeScreen from './src/screens/homeScreen/HomeScreen';



const App = () => {


  return (
    <>

      <Routes />

    </>
  );
};


export default App;
