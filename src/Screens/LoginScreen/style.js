import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontfamily from '../../styles/fontFamily';
import {
  moderateScale,
  moderateScaleVertical,
  textScale,
} from '../../styles/responsiveSize';
const styling = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    height: 30,
    width: 30,
    margin: 5,
  },
  viewcss: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
    alignItems: 'center',
    borderColor: colors.lightGreyBg,
    borderWidth: 2,
  },
  inputtext: {
    flex: 0.9,
  },
  btnview: {
    alignItems: 'center',
    backgroundColor: colors.blueB,
    marginHorizontal: 5,
    paddingVertical: 5,
  },
  btntext: {
    color: 'white',
    fontSize: 20,
    fontFamily: fontfamily.Mulish_Medium,
  },
  languagetext: {
    margin: moderateScale(10),
    fontSize: textScale(15),
    color: 'black',
    fontFamily: fontfamily.Mulish_Medium,
  },
  Socialcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: moderateScaleVertical(10),
  },
  googlebtn: {
    borderWidth: 0.5,
    borderRadius: 5,
    flex: 0.4,
    paddingVertical: moderateScaleVertical(5),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  facebookbtn: {
    backgroundColor: '#4267B2',
    flex: 0.4,
    alignItems: 'center',
    borderRadius: 5,
    justifyContent: 'center',
  },
  backbtn: {
    backgroundColor: colors.blueB,
    alignItems: 'center',
    marginHorizontal: moderateScale(50),
    marginVertical: moderateScale(30),
  },
});
export default styling;
