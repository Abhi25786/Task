import React from 'react';
import {Text} from 'react-native';

function TextComponent({name, styling = ''}) {
  return <Text style={styling}> {name} </Text>;
}

export default TextComponent;
