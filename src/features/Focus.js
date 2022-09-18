import React from 'react'
import { TextInput, View, StyleSheet, Text } from 'react-native'
import Button from '../components/Button';
import { colors } from '../utils/colors';

export const Focus = () => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} />
            <Button title={"Focus"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.8,
        flexDirection: 'row'
    },
    input: {
        height: 40,
        width: 200,
        backgroundColor: colors.blue,
        color: colors.white,
        padding: 10,
        borderRadius: 5,
        marginRight: 20
    },
});


export default Focus

