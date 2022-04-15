import React from 'react'
import { Text, View } from 'react-native'
import colors from '../styles/colors'
import { moderateScale, textScale } from '../styles/responsiveSize'

function HeadComponent({
    Title = '',
    color = '',
    style
}) {
    return (
        <View style={{ marginHorizontal: moderateScale(10) }}>
            <Text style={{ fontSize: textScale(20), color: colors.black }}>{Title}</Text>
        </View>
    )
}

export default HeadComponent