import React from 'react'
import { Text, View, SafeAreaView, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native'
import { images } from '../../asscets/pic'
import Button from '../../components/Button'
import TextInputComponent from '../../components/TextInput'
import name from '../../navigation/navigationString'
import colors from '../../styles/colors'

import addcss from './addcss'
function AddScreen() {
    return (
        <View style={addcss.MainContainer}>
            <ScrollView>

                <TextInputComponent
                    leftImage={true}
                    image={images?.user}
                    placeholder={'Enter Name'}
                    placeholderTextColor={colors?.black}

                />
                <TextInputComponent
                    leftImage={true}
                    image={images?.phonebok}
                    placeholder={'Enter Phone Number '}
                    placeholderTextColor={colors?.black}
                />
                <TextInputComponent
                    leftImage={false}
                    img={images.Add}
                    rightImage={false}
                    placeholder={'Enter age'}
                    placeholderTextColor={colors?.black}

                />
                <TextInputComponent

                    image={images?.address}
                    placeholder={'Enter roll number'}
                    placeholderTextColor={colors?.black}
                />
                <TextInputComponent
                    leftImage={true}
                    image={images?.address}
                    placeholder={'Enter Address'}
                    placeholderTextColor={colors?.black}
                />



                <Button name={name?.Submit} onpress={() => console.log("hello")} stylbtn={addcss.btnview} />
            </ScrollView>
        </View>
    )
}

export default AddScreen