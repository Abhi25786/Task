import React, {useState, useEffect} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  View,
  Button,
  Text,
} from 'react-native';
import RNRestart from 'react-native-restart';
import Buttoncustam from '../../components/Button';
import HeadComponent from '../../components/HeadComponent';
import TextComponent from '../../components/TextComponent';
import TextInputComponent from '../../components/TextInput';
import imagePath from '../../constants/imagePath';
import {
  changeLaguage,
  default as langstring,
  default as strings,
} from '../../constants/lang';
import {loginContinue, LoginGoogle} from '../../redux/actions/auth';
import colors from '../../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
import {commanstyle} from '../../styles/styling';
import addcss from '../AddScreen/style';
import style from './style';
import {signIn} from '../../../App';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

function LoginScreen() {
  // -----------------------Google Login ----------------------//

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // console.log('user info', userInfo.user.email);
      const email=userInfo.user.email
       const id=userInfo.user.id
       const data={email,id}
      loginContinue(data);
       console.log(data,"google data");
      // this.setState({userInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error raise', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error raise', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error raise', error);
      } else {
        // some other error happened
      }
    }
  };

  // -------------------------facebook login---------------------//
  const fbLogIn = resCallBack => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result ****************', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallBack({message: 'Email is required'});
        }
        if (result.isCancelled) {
          console.log('dxcfgvbhjn');
        } else {
          const infoRequest = new GraphRequest(
            'me?fields= email,name, picture',
            null,
            resCallBack,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (errror) {
        console.log('login failed', errror);
      },
    );
  };

  const onFBlogIn = async () => {
    try {
      await fbLogIn(_resInfoCallback);
    } catch (error) {
      console.log('drcfgvbhjnk', error);
    }
  };

  const _resInfoCallback = async (error, result) => {
    if (error) {
      console.log('error raised at response', error);
      return;
    } else {
      const userData = result;
      console.log('userData **********', userData);
      loginContinue(userData)
    }
  };

  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [show, setShow] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');

  const data = {email, password};
  // --------------------------------Login button function-----------------------------//
  const Click = () => {
    if (email.length < 10) {
      setShow(true);
    } else if (strongRegex.test(password)) {
      console.log('mylogin----', data);
      loginContinue(data);
    } else {
      setShow(false);
      setShowpassword(true);
    }
  };
  const onChangeLng = key => {
    changeLaguage(key);
    RNRestart.Restart();
  };

 

  return (
    <SafeAreaView style={addcss.MainContainer}>
      <View>
        <HeadComponent Title={langstring.LOGIN} />
        <ScrollView>
          {/* ------------------------------------Email textinput------------------------------------- */}
          <TextInputComponent
            leftImage={true}
            image={imagePath?.user}
            placeholder={langstring.EMAIL_NUMBER}
            placeholderTextColor={colors?.black}
            value={email}
            onchangetext={event => setEmail(event)}
            keyboardtype={'email-address'}
          />
          {/* ------------------------------------Show wrong Email------------------------------------- */}
          {show ? (
            <TextComponent
              name={strings.VALID_EMAIL_NUMBER}
              styling={commanstyle.error}
            />
          ) : null}
          {/* ------------------------------------Password textinput------------------------------------- */}

          <TextInputComponent
            leftImage={true}
            image={imagePath?.password}
            placeholder={langstring.PASSWORD}
            placeholderTextColor={colors?.black}
            value={password}
            onchangetext={event => setpassword(event)}
          />
          {/* ------------------------------------Show wrong password------------------------------------- */}

          {showpassword ? (
            <TextComponent
              name={langstring.VALID_PASSWORD}
              styling={commanstyle.error}
            />
          ) : null}

          {/* ------------------------------------Login Button------------------------------------- */}
          <Buttoncustam
            name={langstring.LOGIN}
            onpress={Click}
            stylbtn={addcss.btnview}
          />
          {showpassword ? (
            <TextComponent
              name={langstring.PASSWORD_ERROR}
              styling={commanstyle.error}
            />
          ) : null}

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: moderateScaleVertical(10),
            }}>
            <TouchableOpacity
              style={{
                borderWidth: 0.5,
                borderRadius: 5,
                flex: 0.4,

                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: moderateScaleVertical(5),
              }}
              onPress={signIn}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={imagePath.Google}
                  style={{height: moderateScale(30), width: moderateScale(30)}}
                />
                <Text style={{color: 'lightblue', fontSize: textScale(20)}}>
                  oogle
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: '#4267B2',
                flex: 0.4,
                alignItems: 'center',
                borderRadius: 5,
                justifyContent: 'center',
              }}
              onPress={onFBlogIn}>
              <View>
                <Text style={{color: 'white', fontSize: textScale(20)}}>
                  facebook
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* ---------------------------Language section-------------------- */}
          <TouchableOpacity onPress={() => onChangeLng('hn')}>
            <TextComponent name={'हिन्दी'} styling={style.languagetext} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onChangeLng('en')}>
            <TextComponent name={'English'} styling={style.languagetext} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onChangeLng('fr')}>
            <TextComponent name={'Français'} styling={style.languagetext} />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default LoginScreen;
