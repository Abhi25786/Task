import React from 'react';
// import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen/HomeScreen';
import AddScreen from '../screens/AddScreen/AddScreen';





export default function (Stack) {
    return (
        <>

            <Stack.Screen name="Home" component={HomeScreen} options={{ gestureEnable: true, gestureDirection: 'horizontal' }} />
            <Stack.Screen name="Add Data" component={AddScreen} />

        </>
    );
}