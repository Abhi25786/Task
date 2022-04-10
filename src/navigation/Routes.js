
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react';
import { useSelector } from 'react-redux';

import AuthNav from './AuthNav';
import HomeNav from './HomeNav';



const Stack = createStackNavigator();

export default function Routes() {

 const data = useSelector(state => state.Continue)
    return (

        <NavigationContainer>
            <Stack.Navigator>
                {true ? HomeNav(Stack) : AuthNav(Stack)}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
