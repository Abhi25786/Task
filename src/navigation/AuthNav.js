import React from 'react';
import LoginScreen from '../Screen/LoginScreen/LoginScreen';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Login" component={LoginScreen} />
    </>
  );
}
