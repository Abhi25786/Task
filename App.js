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
import { Provider } from 'react-redux';
import Home from './Home';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';





const App = () => {


  return (
    <>
      <Provider store={store}>

        <Routes />
      </Provider>


    </>
  );
};


export default App;
