import React from 'react';
import AddScreen from '../Screen/AddScreen/AddScreen';
import HomeScreen from '../Screen/HomeScreen/HomeScreen';

export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add Data" component={AddScreen} />
    </>
  );
}
