import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'

import { images } from '../../asscets/pic'
import Buttoncustam from '../../components/Button'
import Button from '../../components/Button'
import TextInputComponent from '../../components/TextInput'
import name from '../../navigation/navigationString'
import colors from '../../styles/colors'
import addcss from '../addScreen/addcss'
import styling from './logincss'
function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [show, setShow] = useState(false)
    const [showpassword, setShowpassword] = useState(false)
    const emailvelidation = /^[\w]{10,}$/;
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    const Click = () => {
        if (emailvelidation.test(email)) {
            console.log("good")
        } else if (strongRegex.test(password)) {
            console.log("good")

        } else if (email == '') {
            setShow(true)
        } else if (password == '') {
            setShow(false)
            setShowpassword(true)
        }
    }
    return (

        <View style={addcss.MainContainer}>
            <ScrollView>

                <TextInputComponent
                    leftImage={true}
                    image={images?.user}
                    placeholder={'Enter Email  or Number'}
                    placeholderTextColor={colors?.black}
                    onchnagetext={(event) => setEmail(event)}

                />
                {
                    show ? <Text style={styling.error}>Enter Valid email or Number</Text> : null
                }
                <TextInputComponent
                    leftImage={true}
                    image={images?.password}
                    placeholder={'Enter Password '}
                    placeholderTextColor={colors?.black}
                    onchnagetext={(event) => setpassword(event)}
                />
                {
                    showpassword ? <Text style={styling.error}>Enter Valid password</Text> : null
                }



                <Buttoncustam name='Login' onpress={Click} stylbtn={addcss.btnview} />
            </ScrollView>
        </View>

    )
}

export default LoginScreen