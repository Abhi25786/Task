import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { useDispatch } from 'react-redux'

import { images } from '../../asscets/pic'
import Buttoncustam from '../../components/Button'
import Button from '../../components/Button'
import TextComponent from '../../components/TextComponent'
import TextInputComponent from '../../components/TextInput'
import name from '../../navigation/navigationString'
import { loginContinue } from '../../redux/actions/auth'
import colors from '../../styles/colors'
import { commanstyle } from '../../styles/styling'
import addcss from '../addScreen/addcss'
import styling from './logincss'
function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [show, setShow] = useState(false)
    const [showpassword, setShowpassword] = useState(false)

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    const dispatch = useDispatch()

    // --------------------------------Login button function-----------------------------//
    const Click = () => {


        if (email.length < 10) {
            setShow(true)
        } else if (strongRegex.test(password)) {
            dispatch(loginContinue())
        } else {
            setShow(false)
            setShowpassword(true)
        }


    }
    return (

        <View style={addcss.MainContainer}>
            <ScrollView>
                {/* ------------------------------------Email textinput------------------------------------- */}
                <TextInputComponent
                    leftImage={true}
                    image={images?.user}
                    placeholder={'Enter Email  or Number'}
                    placeholderTextColor={colors?.black}
                    onchnagetext={(event) => setEmail(event)}

                />
                {/* ------------------------------------Show wrong Email------------------------------------- */}
                {
                    show ? <TextComponent name={'Enter Email or Number'} styling={commanstyle.error} /> : null
                }
                {/* ------------------------------------Password textinput------------------------------------- */}

                <TextInputComponent
                    leftImage={true}
                    image={images?.password}
                    placeholder={'Enter Password '}
                    placeholderTextColor={colors?.black}
                    onchnagetext={(event) => setpassword(event)}
                />
                {/* ------------------------------------Show wrong password------------------------------------- */}

                {
                    showpassword ? <TextComponent name={'Enter valid password'} styling={commanstyle.error} /> : null
                }


                {/* ------------------------------------Login Button------------------------------------- */}
                <Buttoncustam name='Login' onpress={Click} stylbtn={addcss.btnview} />
            </ScrollView>
        </View>

    )
}


export default LoginScreen