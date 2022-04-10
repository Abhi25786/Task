import React from 'react'
import { View, TextInput, Image, button, Text, StyleSheet } from 'react-native'
import name from '../navigation/navigationString'
import styling from '../screens/loginScreen/logincss'
import colors from '../styles/colors'
const TextInputComponent = ({
    image = '',
    img = '',
    placeholder = '',
    placeholderTextColor = '',
    leftImage = false,
    rightImage = false,
    onchnagetext = '',
    keyboardType=''

}) => {
    return (
        <View style={styles.viewcss}>
            {leftImage && <View style={{ flex: 0.15, }}>
                <Image source={image} style={styles.image} />
            </View>}

            <View style={{ flex: 0.7, alignItems: 'flex-start' }}>
                <TextInput placeholder={placeholder} placeholderTextColor={placeholderTextColor} style={styles.inputtext} onChangeText={onchnagetext} keyboardType={keyboardType} />
            </View>

            {rightImage && <View style={{ flex: 0.15, alignItems: 'flex-end', backgroundColor: "red" }}>
                <Image source={img} style={styles.image} />
            </View>}


        </View>
    )
}


const styles = StyleSheet.create({

    image: {
        height: 30,
        width: 30,
        margin: 5,

    },
    viewcss: {
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: "center",
        borderColor: colors.lightGreyBg,
        borderWidth: 2,
        flex: 1

    },
    inputtext: {

        paddingVertical: 10,

    },

})

export default TextInputComponent
