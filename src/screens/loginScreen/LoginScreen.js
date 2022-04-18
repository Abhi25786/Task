import React, { useState } from 'react'
import { SafeAreaView, ScrollView, TouchableOpacity, View } from 'react-native'
import RNRestart from 'react-native-restart'
import Buttoncustam from '../../components/Button'
import HeadComponent from '../../components/HeadComponent'
import TextComponent from '../../components/TextComponent'
import TextInputComponent from '../../components/TextInput'
import imagePath from '../../constants/imagePath'
import langstring from '../../constants/lang'
import strings, { changeLaguage } from '../../constants/lang'
import { loginContinue } from '../../redux/actions/auth'
import colors from '../../styles/colors'
import { commanstyle } from '../../styles/styling'
import addcss from '../AddScreen/style'



function LoginScreen() {

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');
    const [show, setShow] = useState(false)
    const [showpassword, setShowpassword] = useState(false)

    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");



    const data = { email, password }
    // --------------------------------Login button function-----------------------------//
    const Click = () => {


        if (email.length < 10) {
            setShow(true)
        } else if (strongRegex.test(password)) {
            console.log('mylogin----', data)
            loginContinue(data)
        } else {
            setShow(false)
            setShowpassword(true)
        }


    }
     const onChangeLng = (key) => {
        changeLaguage(key)
        RNRestart.Restart()
    }
    return (

<SafeAreaView  style={addcss.MainContainer}>


        <View>
            <HeadComponent Title={langstring.LOGIN} />
            <ScrollView>
                {/* ------------------------------------Email textinput------------------------------------- */}
                <TextInputComponent
                    leftImage={true}
                    image={imagePath?.user}
                    placeholder={langstring.EMAIL_NUMBER}
                    placeholderTextColor={colors?.black}
                    value={email}
                    onchangetext={(event) => setEmail(event)}


                />
                {/* ------------------------------------Show wrong Email------------------------------------- */}
                {
                    show ? <TextComponent name={strings.VALID_EMAIL_NUMBER} styling={commanstyle.error} /> : null
                }
                {/* ------------------------------------Password textinput------------------------------------- */}

                <TextInputComponent
                    leftImage={true}
                    image={imagePath?.password}
                    placeholder={langstring.PASSWORD}
                    placeholderTextColor={colors?.black}
                    value={password}
                    onchangetext={(event) => setpassword(event)}
                />
                {/* ------------------------------------Show wrong password------------------------------------- */}

                {
                    showpassword ? <TextComponent name={langstring.VALID_PASSWORD} styling={commanstyle.error} /> : null
                }


                {/* ------------------------------------Login Button------------------------------------- */}
                <Buttoncustam name={langstring.LOGIN} onpress={Click} stylbtn={addcss.btnview} />
                {
                    showpassword ? <TextComponent name={langstring.PASSWORD_ERROR} styling={commanstyle.error} /> : null
                }

                <TouchableOpacity onPress={() => onChangeLng('en')} >
                    <TextComponent name={'English'} styling={{margin:10}}/>
                  
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onChangeLng('fr')} >
                    <TextComponent name={'French'} styling={{margin:10}}/>
                  
                </TouchableOpacity>
            </ScrollView>
        </View>
        </SafeAreaView>

    )
}


export default LoginScreen