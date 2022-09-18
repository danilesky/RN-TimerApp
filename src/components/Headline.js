import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

const Headline = ({ ...props }) => {
    return (
        <Text style={[styles(props.theme).text, props.customStyle]}>
            {props.title}
        </Text >
    )
}

const styles = (theme) => StyleSheet.create({
    text: {
        color: theme === 'dark' ? colors.darkBlue : colors.white,
        fontWeight: '700',
        fontSize: 55,
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 60,
        letterSpacing: -2,
        textAlign: 'center',
    }
})

export default Headline
