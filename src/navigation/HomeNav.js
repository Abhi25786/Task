import React from 'react';
import AddScreen from '../screens/AddScreen/AddScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';




export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add Data" component={AddScreen} />
    </>
  );
}
