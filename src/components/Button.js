import React from 'react'
import { View, button, Text, TouchableOpacity } from 'react-native'
import name from '../navigation/navigationString'
import styling from '../Screens/LoginScreen/style'
function Buttoncustam({
    name = '',
    onpress = '',
    stylbtn = ''
}) {

    return (
        <TouchableOpacity onPress={onpress}>
            <View style={stylbtn}>
                <Text style={styling.btntext}>{name}</Text>
            </View>

        </TouchableOpacity>

    )
}

export default Buttoncustam