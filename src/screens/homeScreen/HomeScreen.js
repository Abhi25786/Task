import React from 'react'
import { SafeAreaView, Text, Button, View, TouchableOpacity, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { useSelector,useDispatch } from 'react-redux'
import { images } from '../../asscets/pic'
import { addData, deleData } from '../../redux/actions/auth'
import colors from '../../styles/colors'

import styling from '../loginScreen/logincss'
import homecss from './homecss'

function HomeScreen({ navigation }) {
const dispatch=useDispatch()
const list = useSelector((state) => state.datainput.list)

// const Click = (elem) => {
//     dispatch(deleData(elem.id))
// }
    return (
        <SafeAreaView style={homecss.maincontainer}>
            {/* <Image source={images.Add} style={homecss.addbtn} /> */}
            <ScrollView>
{
    list.map((elem) =>{
        return(
          <>
        
<View  style={{flexDirection:"row" ,marginHorizontal:10,borderColor:colors.lightGreyBg,borderWidth:2,marginVertical:5,borderRadius:10}}>
<View style={{flex:0.8,marginLeft:10}}>
            <Text style={{color:"black"}}>Name :- {elem.name}</Text>
            <Text style={{color:"black"}}>Phone :- {elem.phone}</Text>
            <Text style={{color:"black"}}>Age :- {elem.age}</Text>
            <Text style={{color:"black"}}>Rollnumber :- {elem.roll}</Text>
            <Text style={{color:"black"}}>Address :- {elem.address}</Text>

</View>
<View style={{flex:0.2 ,flexDirection:"column",alignItems:"center",justifyContent:"space-between",paddingVertical:10}} >
<TouchableOpacity onPress={()=> dispatch(deleData(elem.id))}>

<Image source={images.trash} style={{height:30,width:30}}  key={elem.id}/>

</TouchableOpacity>
<TouchableOpacity>
<Image source={images.update} style={{height:30,width:30}}/>
</TouchableOpacity>
</View>

</View>

            
          </>
         

          
        )
    })
}

     
            <TouchableOpacity onPress={() => navigation.navigate("Add Data")}>

            <View style={{flexDirection:"row",justifyContent:"flex-end",marginRight:5}}>

                <Image source={images.Add} style={homecss.addbtn} />
            </View>

            </TouchableOpacity>

</ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen