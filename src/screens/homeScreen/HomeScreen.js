import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import {
  FlatList, Image, SafeAreaView,
  Text, TouchableOpacity, View
} from 'react-native';
import { useSelector } from 'react-redux';
import TextComponent from '../../components/TextComponent';
import imagePath from '../../constants/imagePath';
import langstring from '../../constants/lang';
import {
  deleData,
  logoutContinue
} from '../../redux/actions/auth';
import homecss from './style';



function HomeScreen({navigation}) {
  const list = useSelector(state => state.datainput.list);
  
  const email = list.u
    // logoutContinue();
 const signOut = async () => {
  try {
    await GoogleSignin.signOut();
    // this.setState({ user: null }); // Remember to remove the user from your app's state as well
   logoutContinue();
  } catch (error) {
    console.error(error);
  }
};
  // storeData(list)
  
  {/* ----------------------------Show Todo List------------------------------------ */}
  const renderData = ({item, index}) => {
    const elem = item;
    return (
      <View style={homecss.mapview} key={String(index)}>
        <View style={homecss.textview}>
          <Text style={homecss.textcss}>
            {langstring.NAME} :- {elem.name}
          </Text>
          <Text style={homecss.textcss}>
            {langstring.PHONE} :- {elem.phone}
          </Text>
          <Text style={homecss.textcss}>
            {langstring.AGE} :- {elem.age}
          </Text>
          <Text style={homecss.textcss}>
            {langstring.ROLL_NUMBER} :- {elem.roll}
          </Text>
          <Text style={homecss.textcss}>
            {langstring.ADDRESS} :- {elem.address}
          </Text>
        </View>
        <View style={homecss.btnview}>
          <TouchableOpacity onPress={() => deleData(elem.userId)}>
            <Image source={imagePath.trash} style={homecss.btnimg} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Add Data', {elem})}>
            <Image source={imagePath.update} style={homecss.editimg} />
          </TouchableOpacity>
      
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={homecss.maincontainer}>

      <Text></Text>
      <View style={homecss.headcss}>
        <TextComponent styling={homecss.headtextcss} name={langstring.HOME} />
        <TouchableOpacity onPress={signOut}>
          <TextComponent
            styling={homecss.headtextcss}
            name={langstring.LOGOUT}
          />
        </TouchableOpacity>
      </View>

      <FlatList data={list} renderItem={renderData} showsVerticalScrollIndicator={false}/>
      
      {/* --------------------------------Add Todo Button------------------------------- */}
      <TouchableOpacity onPress={() => navigation.navigate('Add Data')}>
        <View style={homecss.imagebtn}>
          <Image source={imagePath.Add} style={homecss.addbtn} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
