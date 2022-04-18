import React from 'react';
import LoginScreen from '../screens/LoginScreen/LoginScreen';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
    </>
  );
}
