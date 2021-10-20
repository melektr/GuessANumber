import React from 'react'
import { StyleSheet , Text } from 'react-native'


const BodyText = props => <Text style={style.body}> {props.children}</Text>

const style = StyleSheet.create({
    body:{
        fontFamily : 'OpenSans-Bold'
    }
})

export default BodyText