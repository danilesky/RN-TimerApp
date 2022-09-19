import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'
import CountDown from '../components/CountDown'

function Timer() {
    const [isPaused, setPaused] = useState(true)
    return (
        <View style={styles.container}>
            <CountDown trackTime={210} isPaused={isPaused} />
            <Button title={isPaused ? "Pause" : "Start"} onPress={() => setPaused((prev) => !prev)} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default Timer
