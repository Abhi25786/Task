import React from 'react';
// import { useSelector } from 'react-redux';


import LoginScreen from '../screens/loginScreen/LoginScreen';

// import navigationStrings from './navigationStrings';

export default function (Stack) {
    return (
        <>
            <Stack.Screen name='Login' component={LoginScreen} />

        </>
    );
}