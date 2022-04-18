import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import fontfamily from '../../styles/fontFamily';
import {moderateScale, moderateScaleVertical, textScale} from '../../styles/responsiveSize';
const homecss = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  headcss: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal:moderateScale(10),
    marginBottom:moderateScaleVertical(10)
  },
  addbtn: {
    height: moderateScale(50),
    width: moderateScale(50),
  },
  imagebtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    marginRight: moderateScale(10),
    bottom: 10,
  },
  mapview: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(10),
    borderColor: colors.lightGreyBg,
    borderWidth: 2,
    marginVertical: moderateScaleVertical(10),
    borderRadius: 10,
     
  },
  textcss: {
    color: colors.black,
    fontSize: textScale(15),
    fontFamily:fontfamily.Mulish_Medium
  },
  headtextcss: {
    color: colors.black,
    fontSize: textScale(20),
    fontFamily:fontfamily.Mulish_Medium

  },
  textview: {
    flex: 0.9,
    marginLeft: moderateScale(10),
  
  },
  btnview: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: moderateScaleVertical(10),
  },
  btnimg: {
    height: moderateScale(30),
    width: moderateScale(30),
    marginRight: moderateScale(10),
  },
    editimg: {
     height: moderateScale(30),
    width: moderateScale(30),
   
  },
});
export default homecss;
