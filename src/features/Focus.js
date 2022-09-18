import React from 'react'
import { TextInput, View, StyleSheet, Text, SafeAreaView } from 'react-native'
import Button from '../components/Button';
import { colors } from '../utils/colors';

export const Focus = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <TextInput style={styles.input} />
                <Button title={"Focus"} />
            </SafeAreaView>
            <SafeAreaView style={styles.bodyContainer}>
                <Text>List</Text>
            </SafeAreaView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
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
    bodyContainer: {
        flex: 2,
        backgroundColor: colors.white,
    }
});


export default Focus

