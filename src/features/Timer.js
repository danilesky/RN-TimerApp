import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import Button from '../components/Button'
import CountDown from '../components/CountDown'
import { colors } from '../utils/colors'

function Timer() {
    const [isPaused, setPaused] = useState(true)
    const [progress, setProgress] = useState(null)

    console.log(progress)
    return (
        <View style={styles.container}>
            <ProgressBar progress={1 - (progress / 20)} color={colors.grey} style={styles.progressBar} />
            <CountDown trackTime={20}
                isPaused={isPaused}
                onProgress={setProgress}
            />
            <Button title={isPaused ? "Pause" : "Start"} onPress={() => setPaused((prev) => !prev)} buttonStyle={styles.button} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    progressBar: {
        height: 2,
        width: 140,
        marginBottom: 20
    },
    button: {
        marginTop: 20
    }
})

export default Timer
