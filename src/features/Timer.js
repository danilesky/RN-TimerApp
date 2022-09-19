import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import Button from '../components/Button'
import CountDown from '../components/CountDown'
import { colors } from '../utils/colors'

const progressCalc = (timeSpent, timeTotal) => {
    if (timeSpent && timeTotal) {
        return timeSpent / timeTotal
    }
    return 0
}

function Timer() {
    const [isPaused, setPaused] = useState(false)
    const [progress, setProgress] = useState(null)
    const [focusTime, setFocusTime] = useState(null)

    const focusTimeHandler = (minutes) => {
        setFocusTime((prev) => prev + (minutes * 60))
    }

    return (
        <View style={styles.container}>
            <ProgressBar progress={progressCalc(progress, focusTime)} color={colors.grey} style={styles.progressBar} />
            <CountDown
                trackTime={focusTime}
                isPaused={isPaused}
                onProgress={setProgress}
            />
            <View style={styles.timeAdd}>
                <Button title={'+5min'} onPress={() => focusTimeHandler(5)} buttonStyle={styles.buttonAdd} textStyle={styles.buttonAddText} />
                <Button title={'+10min'} onPress={() => focusTimeHandler(10)} buttonStyle={styles.buttonAdd} textStyle={styles.buttonAddText} />
                <Button title={'+20min'} onPress={() => focusTimeHandler(20)} buttonStyle={styles.buttonAdd} textStyle={styles.buttonAddText} />
            </View>
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
    },
    timeAdd: {
        flexDirection: 'row'
    },
    buttonAdd: {
        backgroundColor: colors.blue,
        marginTop: 10
    },
    buttonAddText: {
        color: colors.white
    }
})

export default Timer
