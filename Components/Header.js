import React from 'react'
import { StyleSheet, View , Text} from 'react-native'
import Colors from '../Constants/Colors'
 const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}> {props.title}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop : 36,
        backgroundColor : Colors.header,
        alignItems: 'center',
        justifyContent : 'center'
    },
    headerTitle : {
        color : 'black',
        fontSize : 18,
        fontFamily : 'OpenSans-Bold'
    }
})

export default Header