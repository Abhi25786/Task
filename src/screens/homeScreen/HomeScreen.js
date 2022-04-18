import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';

import TextComponent from '../../components/TextComponent';
import imagePath from '../../constants/imagePath';
import langstring from '../../constants/lang';
import {
  addData,
  deleData,
  logoutContinue,
  updateData,
} from '../../redux/actions/auth';
import colors from '../../styles/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
import {storeData} from '../../utils/utils';

import homecss from './style';

function HomeScreen({navigation}) {
  const list = useSelector(state => state.datainput.list);

  const Logout = () => {
    logoutContinue();
  };
  // storeData(list)
  return (
    <SafeAreaView style={homecss.maincontainer}>
      <View style={homecss.headcss}>
        <TextComponent styling={homecss.headtextcss} name={langstring.HOME} />
        <TouchableOpacity onPress={Logout}>
          <TextComponent styling={homecss.headtextcss} name={langstring.LOGOUT} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* ----------------------------Show Todo List------------------------------------ */}
        {list.map((elem, index) => {
          // console.log(elem, "show data----")
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

                {/* {console.log(elem)} */}
              </View>
            </View>
          );
        })}
      </ScrollView>
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
