import React from 'react'
import { SafeAreaView, Text, Button, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { images } from '../../asscets/pic'
import styling from '../loginScreen/logincss'
import homecss from './homecss'
function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={homecss.maincontainer}>
            {/* <Image source={images.Add} style={homecss.addbtn} /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Add Data")}>
                <Image source={images.Add} style={homecss.addbtn} />

            </TouchableOpacity>


        </SafeAreaView>
    )
}

export default HomeScreen