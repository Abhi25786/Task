import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import HeadComponent from '../../components/HeadComponent';
import TextComponent from '../../components/TextComponent';
import TextInputComponent from '../../components/TextInput';
import imagePath from '../../constants/imagePath';
import strings from '../../navigation/navigationString';
import { addData, updateData } from '../../redux/actions/auth';
import colors from '../../styles/colors';
import { commanstyle } from '../../styles/styling';
import { getData, storeData } from '../../utils/utils';

import addcss from './addcss';
function AddScreen({ navigation, route }) {
  const allData = route?.params?.elem
  // const userid = allData?.id
  // console.log(userid, "---------my show id data")
  // const list = useSelector((state) => state.datainput.list)
  // ----------------------------this is inputtext usestate----------------------------//
  const [name, setName] = useState('Abhishek');
  const [phone, setPhone] = useState('8872412819');
  const [age, setAge] = useState('21');
  const [roll, setRollnumber] = useState('1818');
  const [address, setAddress] = useState('Maloya');

  //---------------------------------this is error useState----------------------------//
  const [showname, setshowName] = useState(false);
  const [showphone, setshowPhone] = useState(false);
  const [showage, setshowAge] = useState(false);
  const [showrollnumber, setshowRollnumber] = useState(false);
  const [showaddress, setshowAddress] = useState(false);
  const list = useSelector((state) => state.datainput.list)
  // console.log('====listdata', list)

  const dispatch = useDispatch();

  const userId = Math.floor(Math.random() * 1000);



  useEffect(() => {
    if (allData) {
      setName(allData?.name)
      setPhone(allData?.phone)
      setAge(allData?.age)
      setRollnumber(allData?.roll)
      setAddress(allData?.address)
    }
  }, [allData])







  const Update = () => {
    if (name == '') {
      setshowName(true);
    } else if (phone.length !== 10) {
      setshowName(false);

      setshowPhone(true);
    } else if (age.length !== 2) {
      setshowPhone(false);

      setshowAge(true);
    } else if (roll === '') {
      setshowAge(false);
      setshowRollnumber(true);
    } else if (address === '') {
      setshowRollnumber(false);
      setshowAddress(true);
    }
    else {
      setshowAddress(false);
      dispatch(updateData({ id: allData.userId, name, phone, address, age, roll }))
      navigation.navigate('Home')
    }
  }

  const AddData = () => {


    if (name == '') {
      setshowName(true);
    } else if (phone.length !== 10) {
      setshowName(false);

      setshowPhone(true);
    } else if (age.length !== 2) {
      setshowPhone(false);

      setshowAge(true);
    } else if (roll === '') {
      setshowAge(false);
      setshowRollnumber(true);
    } else if (address === '') {
      setshowRollnumber(false);
      setshowAddress(true);
    }
    else {
      setshowAddress(false);

      console.log('good');
      dispatch(addData([{ userId, name, phone, address, age, roll }]))
      navigation.navigate('Home')
    }
    // storeData(list)
    // console.log('====listdata', list)
  };



  return (
    <View style={addcss.MainContainer}>
      <HeadComponent Title={allData ? strings?.Update : strings?.Submit} />
      <ScrollView>
        {/* --------------------------------Add todo textinput------------------------------ */}
        <TextInputComponent
          leftImage={true}
          image={imagePath?.user}
          placeholder={'Enter Name'}
          placeholderTextColor={colors?.black}
          onchangetext={event => setName(event)}
          value={name}


        />
        {/* ----------------------------------Show empty error------------------------------ */}
        {showname ? (
          <TextComponent name={'Enter Name'} styling={commanstyle.error} />
        ) : null}

        <TextInputComponent
          leftImage={true}
          image={imagePath?.phonebok}
          placeholder={'Enter Phone Number '}
          placeholderTextColor={colors?.black}
          onchangetext={event => setPhone(event)}
          value={phone}
          keyboardtype={"numeric"}
          maxLength={10}

        />
        {showphone ? (
          <TextComponent
            name={'Enter Valid Number'}
            styling={commanstyle.error}
          />
        ) : null}
        <TextInputComponent
          leftImage={false}
          img={imagePath.Add}
          rightImage={false}
          placeholder={'Enter age'}
          placeholderTextColor={colors?.black}
          onchangetext={event => setAge(event)}
          value={age}
          keyboardtype={"numeric"}

        />
        {showage ? (
          <TextComponent name={'Enter Valid Age'} styling={commanstyle.error} />
        ) : null}
        <TextInputComponent
          image={imagePath?.address}
          placeholder={'Enter roll number'}
          placeholderTextColor={colors?.black}
          onchangetext={event => setRollnumber(event)}
          keyboardtype={"numeric"}
          value={roll}
        />
        {showrollnumber ? (
          <TextComponent
            name={'Enter Valid Roll Number'}
            styling={commanstyle.error}
          />
        ) : null}
        <TextInputComponent
          leftImage={true}
          image={imagePath?.address}
          placeholder={'Enter Address'}
          placeholderTextColor={colors?.black}
          onchangetext={event => setAddress(event)}
          value={address}
        />
        {showaddress ? (
          <TextComponent name={'Enter Address'} styling={commanstyle.error} />
        ) : null}

        {/* ---------------------------This is submit button---------------------------- */}
        <Button name={allData ? strings?.Update : strings?.Submit} onpress={allData ? Update : AddData} stylbtn={addcss.btnview} />
      </ScrollView>
    </View>
  );
}

export default AddScreen;
