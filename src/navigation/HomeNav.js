import React from 'react';
import AddScreen from '../Screens/AddScreen/AddScreen';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';




export default function (Stack) {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add Data" component={AddScreen} />
    </>
  );
}
