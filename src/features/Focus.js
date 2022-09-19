import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import Button from '../components/Button';
import Headline from '../components/Headline';
import { colors } from '../utils/colors';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];


export const Focus = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Headline theme={'light'} title={'Focus on ...'} size={40} />
                <View style={styles.headerWrapper}>
                    <TextInput style={styles.input} />
                    <Button title={"Focus"} />
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.bodyContainer}>
                <Headline theme={'dark'} title={'My focus list'} size={30} />
                <View style={styles.listWrapper}>
                    <FlatList
                        data={DATA}
                        renderItem={({ item }) => (
                            <Text style={styles.title}>{item.title}</Text>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
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
        flexDirection: 'column',
    },
    headerWrapper: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
        alignItems: 'center',
    },
    listWrapper: {
        backgroundColor: colors.grey,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        width: 300,
        height: 300,
    }
});


export default Focus

