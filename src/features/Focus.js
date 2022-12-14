import React, { useState } from 'react'
import { TextInput, View, StyleSheet, Text, SafeAreaView, FlatList } from 'react-native'
import Button from '../components/Button';
import Headline from '../components/Headline';
import { colors } from '../utils/colors';

export const Focus = ({ setFocus, setActivity, activities }) => {
    const [text, setText] = useState(null)

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.headerContainer}>
                <Headline theme={'light'} title={'Focus on ...'} size={40} />
                <View style={styles.headerWrapper}>
                    <TextInput style={styles.input} onChangeText={setText} />
                    <Button title={"Focus"} onPress={() => {
                        setActivity(text)
                        setFocus(true)
                    }} />
                </View>
            </SafeAreaView>
            <SafeAreaView style={styles.bodyContainer}>
                <Headline theme={'dark'} title={'My focus list'} size={30} />
                <FlatList
                    data={activities}
                    renderItem={({ item }) => <Text style={styles.title}>{item.activity}</Text>}
                    keyExtractor={item => item.activity}
                />
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
    },
    listItem: {
        color: colors.darkBlue
    },
    title: {
        color: colors.darkBlue
    }

});


export default Focus

