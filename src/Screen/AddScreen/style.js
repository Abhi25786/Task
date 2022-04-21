import { StyleSheet } from 'react-native'
import colors from '../../styles/colors'
import { moderateScale, moderateScaleVertical } from '../../styles/responsiveSize'

const addcss = StyleSheet.create
    ({
        MainContainer: {
            flex: 1,
            backgroundColor: colors.white
        },
        image: {
            height: moderateScale(30),
            width: moderateScale(30),
            margin: 5,

        },
        viewcss: {
            flexDirection: "row",
            marginHorizontal: 5,
            marginVertical: moderateScaleVertical(10),
            alignItems: "center",
            borderColor: colors.lightGreyBg,
            borderWidth: 2,
            flex: 1


        },
        inputtext: {
            flex: 0.9,
            paddingVertical: moderateScaleVertical(10),
            paddingLeft: moderateScale(10)
        },
        btnview: {
            alignItems: "center",
            backgroundColor: colors.blueB,
            marginHorizontal: 10,
            paddingVertical: 5

        },
        btntext: {
            color: "white",
            fontSize: 20,
        },

    })
export default addcss