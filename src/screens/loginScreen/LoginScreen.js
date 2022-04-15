import React, { useState } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'


import Buttoncustam from '../../components/Button'
import Button from '../../components/Button'
import HeadComponent from '../../components/HeadComponent'
import TextComponent from '../../components/TextComponent'
import TextInputComponent from '../../components/TextInput'
import imagePath from '../../constants/imagePath'
import navigationString from '../../navigation/navigationString'
import { loginContinue } from '../../redux/actions/auth'
import colors from '../../styles/colors'
import { commanstyle } from '../../styles/styling'
import addcss from '../AddScreen/style'
import styling from './style'
function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [show, setShow] = useState(false)
    const [showpassword, setShowpassword] = useState(false)

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

    const dispatch = useDispatch()

    const data = { email, password }
    // --------------------------------Login button function-----------------------------//
    const Click = () => {


        if (email.length < 10) {
            setShow(true)
        } else if (strongRegex.test(password)) {
            console.log('mylogin----', data)
            dispatch(loginContinue(data))
        } else {
            setShow(false)
            setShowpassword(true)
        }


    }
    return (


        <View style={addcss.MainContainer}>
            <HeadComponent Title='Login' />
            <ScrollView>
                {/* ------------------------------------Email textinput------------------------------------- */}
                <TextInputComponent
                    leftImage={true}
                    image={imagePath?.user}
                    placeholder={'Enter Email  or Number'}
                    placeholderTextColor={colors?.black}
                    value={email}
                    onchangetext={(event) => setEmail(event)}


                />
                {/* ------------------------------------Show wrong Email------------------------------------- */}
                {
                    show ? <TextComponent name={'Enter Email or Number'} styling={commanstyle.error} /> : null
                }
                {/* ------------------------------------Password textinput------------------------------------- */}

                <TextInputComponent
                    leftImage={true}
                    image={imagePath?.password}
                    placeholder={'Enter Password '}
                    placeholderTextColor={colors?.black}
                    value={password}
                    onchangetext={(event) => setpassword(event)}
                />
                {/* ------------------------------------Show wrong password------------------------------------- */}

                {
                    showpassword ? <TextComponent name={'Enter valid password'} styling={commanstyle.error} /> : null
                }


                {/* ------------------------------------Login Button------------------------------------- */}
                <Buttoncustam name='Login' onpress={Click} stylbtn={addcss.btnview} />
                {
                    showpassword ? <TextComponent name={'Password  must contain Upper and lower \n alphabet & numerical letters'} styling={commanstyle.error} /> : null
                }
            </ScrollView>
        </View>

    )
}


export default LoginScreen