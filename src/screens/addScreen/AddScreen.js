import React, { useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { images } from '../../asscets/pic';
import Button from '../../components/Button';
import TextComponent from '../../components/TextComponent';
import TextInputComponent from '../../components/TextInput';
import name from '../../navigation/navigationString';
import { addData } from '../../redux/actions/auth';
import colors from '../../styles/colors';
import { commanstyle } from '../../styles/styling';

import addcss from './addcss';
function AddScreen({ navigation }) {

  // ----------------------------this is inputtext usestate----------------------------//
  const [addname, setName] = useState('Abhishek');
  const [addphone, setPhone] = useState('8872412819');
  const [age, setAge] = useState('21');
  const [rollnumber, setRollnumber] = useState('1818');
  const [address, setAddress] = useState('Maloya');


  //---------------------------------this is error useState----------------------------//
  const [showname, setshowName] = useState(false);
  const [showphone, setshowPhone] = useState(false);
  const [showage, setshowAge] = useState(false);
  const [showrollnumber, setshowRollnumber] = useState(false);
  const [showaddress, setshowAddress] = useState(false);

  const dispatch = useDispatch();


  const data = { addname, addphone, age, rollnumber, address }
  const Click = () => {

    if (addname == '') {
      setshowName(true);
    } else if (addphone.length !== 10) {
      setshowName(false);

      setshowPhone(true);
    } else if (age.length !== 2) {
      setshowPhone(false);

      setshowAge(true);
    } else if (rollnumber === '') {
      setshowAge(false);
      setshowRollnumber(true);
    } else if (address === '') {
      setshowRollnumber(false);
      setshowAddress(true);
    }
    else {
      setshowAddress(false);

      console.log('good');
      dispatch(addData(data))
      navigation.navigate('Home')
    }
  };


  return (
    <View style={addcss.MainContainer}>
      <ScrollView>
        {/* --------------------------------Add todo textinput------------------------------ */}
        <TextInputComponent
          leftImage={true}
          image={images?.user}
          placeholder={'Enter Name'}
          placeholderTextColor={colors?.black}
          onchnagetext={event => setName(event)}
          value={addname}


        />
        {/* ----------------------------------Show empty error------------------------------ */}
        {showname ? (
          <TextComponent name={'Enter Name'} styling={commanstyle.error} />
        ) : null}

        <TextInputComponent
          leftImage={true}
          image={images?.phonebok}
          placeholder={'Enter Phone Number '}
          placeholderTextColor={colors?.black}
          onchnagetext={event => setPhone(event)}
          value={addphone}
          keyboardtype={"numeric"}

        />
        {showphone ? (
          <TextComponent
            name={'Enter Valid Number'}
            styling={commanstyle.error}
          />
        ) : null}
        <TextInputComponent
          leftImage={false}
          img={images.Add}
          rightImage={false}
          placeholder={'Enter age'}
          placeholderTextColor={colors?.black}
          onchnagetext={event => setAge(event)}
          value={age}
          keyboardtype={"numeric"}

        />
        {showage ? (
          <TextComponent name={'Enter Valid Age'} styling={commanstyle.error} />
        ) : null}
        <TextInputComponent
          image={images?.address}
          placeholder={'Enter roll number'}
          placeholderTextColor={colors?.black}
          onchnagetext={event => setRollnumber(event)}
          keyboardtype={"numeric"}
          value={rollnumber}
        />
        {showrollnumber ? (
          <TextComponent
            name={'Enter Valid Roll Number'}
            styling={commanstyle.error}
          />
        ) : null}
        <TextInputComponent
          leftImage={true}
          image={images?.address}
          placeholder={'Enter Address'}
          placeholderTextColor={colors?.black}
          onchnagetext={event => setAddress(event)}
          value={address}
        />
        {showaddress ? (
          <TextComponent name={'Enter Address'} styling={commanstyle.error} />
        ) : null}

        {/* ---------------------------This is submit button---------------------------- */}
        <Button name={name?.Submit} onpress={Click} stylbtn={addcss.btnview} />
      </ScrollView>
    </View>
  );
}

export default AddScreen;
