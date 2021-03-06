import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styling from '../Screens/LoginScreen/style';
function Buttoncustam({name = '', onpress = '', stylbtn = ''}) {
  return (
    <TouchableOpacity onPress={onpress}>
      <View style={stylbtn}>
        <Text style={styling.btntext}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Buttoncustam;
