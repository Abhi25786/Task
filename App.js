/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import Home from './Home';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import types from './src/redux/types';
import { getData, getLogin, storeData } from './src/utils/utils';


import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const { dispatch } = store;

const App = () => {
  // const dispatch = useDispatch();
  // const list = useSelector((state) => state.datainput.list)
  // useEffect(() => {

  //   storeData({ name: 'hello' })
  // }, [])

  // const fetchData = () => {
  //   getData().then((res) => {

  //     console.log("value", res)
  //   })


  // }


  useEffect(() => {
    getLogin().then((res) => {
      console.log("store data", res)

      dispatch({
        type: types.LOGIN,
        payload: res
      })

    })
    getData().then((res) => {
      console.log("store data", res)
      if (!!res) {
        dispatch({
          type: 'ADD_DATA',
          payload: res
        })
      }
    })
  }, [])
  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor={"white"} />
      <Provider store={store}>

        <Routes />
      </Provider>



    </>
  );
};


export default App;
