
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { useSelector } from 'react-redux';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';



const Stack = createStackNavigator();

export default function Routes() {

    const data = useSelector(state => state.Continue.userdata)
    return (

        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {data ? HomeNav(Stack) : AuthNav(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
