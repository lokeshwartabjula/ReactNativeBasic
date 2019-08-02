import React from 'react'
import { View, Text } from 'react-native'

const ShowText = (props) => {
    return (
        <View>
            <Text>{props.label}</Text>
        </View>
    )
}

export default ShowText
