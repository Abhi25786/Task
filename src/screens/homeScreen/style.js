import {
    StyleSheet
} from 'react-native'
import colors from '../../styles/colors'
const homecss = StyleSheet.create({

    maincontainer: {
        flex: 1,
        backgroundColor: "white"
    },
    addbtn: {
        height: 50,
        width: 50,


    },
    imagebtn: {
        flexDirection: "row",
        justifyContent: "flex-end",
        position: "absolute",
        right: 0,
        marginRight: 10,
        bottom: 10
    },
    mapview: {
        flexDirection: "row",
        marginHorizontal: 10,
        borderColor: colors.lightGreyBg,
        borderWidth: 2,
        marginVertical: 5,
        borderRadius: 10
    },
    textcss: {
        color: colors.black
    },

})
export default homecss