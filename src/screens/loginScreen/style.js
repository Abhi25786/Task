import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import fontfamily from '../../styles/fontFamily'
import { moderateScale, textScale } from '../../styles/responsiveSize'
const styling = StyleSheet.create({
    MainContainer: {
        flex: 1,
        backgroundColor: "white"
    },
    image: {
        height: 30,
        width: 30,
        margin: 5,

    },
    viewcss: {
        flexDirection: "row",
        marginHorizontal: 5,
        marginVertical: 10,
        alignItems: "center",
        borderColor: colors.lightGreyBg,
        borderWidth: 2,

    },
    inputtext: {
        flex: 0.9
    },
    btnview: {
        alignItems: "center",
        backgroundColor: colors.blueB,
        marginHorizontal: 5,
        paddingVertical: 5

    },
    btntext: {
        color: "white",
        fontSize: 20,
        fontFamily:fontfamily.Mulish_Medium
    },
  languagetext:{
      margin: moderateScale(10),
      fontSize:textScale(15),
      color:"black",
      fontFamily:fontfamily.Mulish_Medium
  
  }


})
export default styling