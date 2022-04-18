import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import {moderateScale, textScale} from '../../styles/responsiveSize';
const homecss = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  addbtn: {
    height: 50,
    width: 50,
  },
  imagebtn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    right: 0,
    marginRight: 10,
    bottom: 10,
  },
  mapview: {
    flexDirection: 'row',
    marginHorizontal: 10,
    borderColor: colors.lightGreyBg,
    borderWidth: 2,
    marginVertical: 5,
    borderRadius: 10,
  },
  textcss: {
    color: colors.black,
    fontSize: textScale(15),
  },
  textview: {
    flex: 0.9,
    marginLeft: moderateScale(10),
  },
  btnview: {
    flex: 0.1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  btnimg: {
    height: 30,
    width: 30,
    marginRight: moderateScale(10),
  },
});
export default homecss;
