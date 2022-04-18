import React from 'react';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
    </>
  );
}
