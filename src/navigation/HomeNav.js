import React from 'react';
// import { useSelector } from 'react-redux';

import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import AddScreen from '../Screens/AddScreen/AddScreen';





export default function (Stack) {
    return (
        <>

            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Add Data" component={AddScreen} />

        </>
    );
}