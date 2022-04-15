import React from 'react'
import { Text, View } from 'react-native'
function HeadComponent({
    Title = '',
    color = '',
    style
}) {
    return (
        <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 20, color: "black" }}>{Title}</Text>
        </View>
    )
}

export default HeadComponent