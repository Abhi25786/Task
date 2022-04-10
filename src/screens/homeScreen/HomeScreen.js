import React from 'react'
import { SafeAreaView, Text, Button, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector,useDispatch } from 'react-redux'
import { images } from '../../asscets/pic'
import { addData, deleData } from '../../redux/actions/auth'

import styling from '../loginScreen/logincss'
import homecss from './homecss'

function HomeScreen({ navigation }) {
const dispatch=useDispatch()
const list = useSelector((state) => state.datainput.list)
    return (
        <SafeAreaView style={homecss.maincontainer}>
            {/* <Image source={images.Add} style={homecss.addbtn} /> */}
            <ScrollView>
{
    list.map((elem) =>{
        return(
          <>
<View style={{flexDirection:"row" ,marginHorizontal:10,borderColor:"black",borderWidth:2,marginVertical:5,borderRadius:10}}>
<View style={{flex:0.8}}>
            <Text style={{color:"black"}}>{elem.name}</Text>
            <Text style={{color:"black"}}>{elem.phone}</Text>
            <Text style={{color:"black"}}>{elem.age}</Text>
            <Text style={{color:"black"}}>{elem.roll}</Text>
            <Text style={{color:"black"}}>{elem.address}</Text>

</View>
<View style={{flex:0.2 ,flexDirection:"column",alignItems:"center",justifyContent:"space-between",paddingVertical:10}}>
<TouchableOpacity>
<Image source={images.address} style={{height:30,width:30}}/>
</TouchableOpacity>
<TouchableOpacity>
<Image source={images.address} style={{height:30,width:30}}/>
</TouchableOpacity>
</View>

</View>
            
          </>
         

          
        )
    })
}
     
            <TouchableOpacity onPress={() => navigation.navigate("Add Data")}>
                <Image source={images.Add} style={homecss.addbtn} />

            </TouchableOpacity>

</ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen