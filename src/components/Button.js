import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'

const Button = ({ buttonStyle, textStyle, ...props }) => {
    return (
        <TouchableOpacity style={[styles.container, buttonStyle]} onPress={props.onPress}>
            <Text style={[styles.text, textStyle]}>
                {props.title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        padding: 10,
        width: 80,
        backgroundColor: colors.white,
    },
    text: {
        fontWeight: '600',
        color: colors.darkBlue
    },
})

export default Button
