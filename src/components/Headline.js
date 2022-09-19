import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { colors } from '../utils/colors'

const Headline = ({ ...props }) => {
    return (
        <Text style={[styles(props).text, props.customStyle]}>
            {props.title}
        </Text >
    )
}

const styles = (props) => StyleSheet.create({
    text: {
        color: props.theme === 'dark' ? colors.darkBlue : colors.white,
        fontWeight: '700',
        fontSize: !props.size ? 55 : props.size,
        justifySelf: 'center',
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 60,
        letterSpacing: -2,
        textAlign: 'center',
    }
})

export default Headline
