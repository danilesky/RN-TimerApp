import React from 'react'
import { TextInput, View, StyleSheet } from 'react-native'
import Button from '../components/Button';
import { colors } from '../utils/colors';

export const Focus = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Button />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
    },
    input: {
        height: 40,
        width: 200,
        backgroundColor: colors.blue,
        color: colors.white,
        padding: 10
    },
});


export default Focus

