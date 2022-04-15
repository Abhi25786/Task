import React, { useEffect } from 'react'
import { SafeAreaView, Text, Button, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'

import TextComponent from '../../components/TextComponent'
import imagePath from '../../constants/imagePath'
import { addData, deleData, updateData } from '../../redux/actions/auth'
import colors from '../../styles/colors'
import { storeData } from '../../utils/utils'

import styling from '../LoginScreen/logincss'
import homecss from './homecss'

function HomeScreen({ navigation }) {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.datainput.list)



    storeData(list)
    return (

        < SafeAreaView style={homecss.maincontainer} >

            <ScrollView>
                {/* ----------------------------Show Todo List------------------------------------ */}
                {
                    list.map((elem, index) => {
                        // console.log(elem, "show data----")
                        return (

                            <View style={homecss.mapview} key={elem.userId}>
                                <View style={{ flex: 0.9, marginLeft: 10 }} >
                                    <Text style={homecss.textcss}>Name :- {elem.name}</Text>
                                    <Text style={homecss.textcss}>Phone :- {elem.phone}</Text>
                                    <Text style={homecss.textcss}>Age :- {elem.age}</Text>
                                    <Text style={homecss.textcss}>Rollnumber :- {elem.roll}</Text>
                                    <Text style={homecss.textcss}>Address :- {elem.address}</Text>


                                </View>
                                <View style={{ flex: 0.1, flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 }} >
                                    <TouchableOpacity onPress={() => dispatch(deleData(elem.userId))}>

                                        <Image source={imagePath.trash} style={{ height: 30, width: 30, marginRight: 10 }} />

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("Add Data", { elem })}>
                                        <Image source={imagePath.update} style={{ height: 27, width: 27 }} />
                                    </TouchableOpacity>

                                    {/* {console.log(elem)} */}
                                </View>

                            </View>
                        )

                    })

                }
            </ScrollView>
            {/* --------------------------------Add Todo Button------------------------------- */}
            <TouchableOpacity onPress={() => navigation.navigate("Add Data")}>

                <View style={{ flexDirection: "row", justifyContent: "flex-end", position: "absolute", right: 0, marginRight: 10, bottom: 10 }}>

                    <Image source={imagePath.Add} style={homecss.addbtn} />
                </View>

            </TouchableOpacity>


        </SafeAreaView >
    )
}

export default HomeScreen