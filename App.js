/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin
} from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';
import { LogBox, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import langstring from './src/constants/lang';
import Routes from './src/navigation/Routes';
import store from './src/redux/store';
import types from './src/redux/types';
import { getData, getLogin } from './src/utils/utils';
import { notificationListener, requestUserPermission } from './src/utils/notificationService'



LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
const {dispatch} = store;


const App = () => {
  useEffect(() => {
    requestUserPermission()
    notificationListener()
    GoogleSignin.configure();
    getLng();

    getLogin().then(res => {
      // console.log('store data', res);

      dispatch({
        type: types.LOGIN,
        payload: res,
      });
    });
    getData().then(res => {
      // console.log('store data', res);
      if (!!res) {
        dispatch({
          type: 'ADD_DATA',
          payload: res,
        });
      }
    });
  }, []);
  const getLng = async () => {
    try {
      const lng = await AsyncStorage.getItem('language');
      // console.log('Lng++++', lng);
      if (!!lng) {
        langstring.setLanguage(lng);
      } else {
        langstring.setLanguage('en');
      }
    } catch (error) {
      console.log('error raised ', error);
    }
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'white'} />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

export default App;
