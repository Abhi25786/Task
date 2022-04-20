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
      const data = userInfo.user;

      loginContinue(data);
      console.log('user info', data);
      // this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error raise', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error raise', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error raise', error);
      } else {
        console.log('error raise', error);
      }
    }
  };

  // -------------------------facebook login---------------------//

  const fbLogIn = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result==>>>>>>', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: ' Eamil is required'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fileds=email,name,picture,friend',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error:' + error);
      },
    );
  };

  const onFBlogIn = async () => {
    try {
      await fbLogIn(_resInfoCallback);
    } catch (error) {
      console.log('fberror-', error);
    }
  };

  const _resInfoCallback = async (error, result) => {
    if (error) {
      console.log('error raised at response', error);
      return;
    } else {
      const userData = result;
      console.log('userData -----', userData);
      loginContinue(userData);
    }
  };

  const [name, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [show, setShow] = useState(false);
  const [showpassword, setShowpassword] = useState(false);

  const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})');

  const data = {name, password};
  // --------------------------------Login button function-----------------------------//
  const Click = () => {
    if (name.length < 10) {
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
            value={name}
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

          <View style={style.Socialcontainer}>
            <TouchableOpacity style={style.googlebtn} onPress={signIn}>
              <View>
                <Image
                  source={imagePath.Google}
                  style={{height: moderateScale(32), width: moderateScale(100)}}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={style.facebookbtn} onPress={onFBlogIn}>
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
