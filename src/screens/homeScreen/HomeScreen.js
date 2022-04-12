import React from 'react'
import { SafeAreaView, Text, Button, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector, useDispatch } from 'react-redux'
import { images } from '../../asscets/pic'
import TextComponent from '../../components/TextComponent'
import { addData, deleData, updateData } from '../../redux/actions/auth'
import colors from '../../styles/colors'

import styling from '../loginScreen/logincss'
import homecss from './homecss'

function HomeScreen({ navigation }) {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.datainput.list)



    return (
        <SafeAreaView style={homecss.maincontainer}>

            <ScrollView>
                {/* ----------------------------Show Todo List------------------------------------ */}
                {
                    list.map((elem, index) => {
                        return (

                            <View style={homecss.mapview} key={elem.id}>
                                <View style={{ flex: 0.8, marginLeft: 10 }} >
                                    <Text style={homecss.textcss}>Name :- {elem.name}</Text>
                                    <Text style={homecss.textcss}>Phone :- {elem.phone}</Text>
                                    <Text style={homecss.textcss}>Age :- {elem.age}</Text>
                                    <Text style={homecss.textcss}>Rollnumber :- {elem.roll}</Text>
                                    <Text style={homecss.textcss}>Address :- {elem.address}</Text>


                                </View>
                                <View style={{ flex: 0.2, flexDirection: "column", alignItems: "center", justifyContent: "space-between", paddingVertical: 10 }} >
                                    <TouchableOpacity onPress={() => dispatch(deleData(elem.id))}>

                                        <Image source={images.trash} style={{ height: 30, width: 30 }} />

                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate("Update", { paramData: elem })}>
                                        <Image source={images.update} style={{ height: 30, width: 30 }} />
                                    </TouchableOpacity>
                                    {/* {console.log(elem)} */}
                                </View>

                            </View>
                        )
                    })
                }

                {/* --------------------------------Add Todo Button------------------------------- */}
                <TouchableOpacity onPress={() => navigation.navigate("Add Data")}>

                    <View style={{ flexDirection: "row", justifyContent: "flex-end", marginRight: 5 }}>

                        <Image source={images.Add} style={homecss.addbtn} />
                    </View>

                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen