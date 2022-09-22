import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProgressBar } from 'react-native-paper'
import Button from '../components/Button'
import CountDown from '../components/CountDown'
import Headline from '../components/Headline'
import { colors } from '../utils/colors'

const progressCalc = (timeSpent, timeTotal) => {
    if (timeSpent && timeTotal) {
        return timeSpent / timeTotal
    }
    return 0
}

function Timer({ setFocus, setFocusStore, activity, setActivities }) {
    const [isPaused, setPaused] = useState(false)
    const [progress, setProgress] = useState(null)
    const [focusTime, setFocusTime] = useState(null)

    const focusTimeHandler = (minutes) => {
        setFocusTime((prev) => prev + (minutes * 60))
    }

    return (
        <View style={styles.container}>
            <Headline title={activity} />
            <ProgressBar progress={progressCalc(progress, focusTime)} color={colors.grey} style={styles.progressBar} />
            <CountDown
                trackTime={focusTime}
                isPaused={isPaused}
                setPaused={setPaused}
                onProgress={setProgress}
                onEnd={() => setFocusStore((prev) =>
                    [...prev,
                    {
                        activity: activity,
                        timeSpent: progress,
                        timeGoal: focusTime
                    }]
                )}
            />
            <View style={styles.timeAdd}>
                <Button title={'+5min'} onPress={() => focusTimeHandler(5)} buttonStyle={styles.buttonAddStart} textStyle={styles.buttonAddText} />
                <Button title={'+10min'} onPress={() => focusTimeHandler(10)} buttonStyle={styles.buttonAddMiddle} textStyle={styles.buttonAddText} />
                <Button title={'+20min'} onPress={() => focusTimeHandler(20)} buttonStyle={styles.buttonAddEnd} textStyle={styles.buttonAddText}
                />
            </View>
            <Button title={isPaused ? "Pause" : "Start"} onPress={() => setPaused((prev) => !prev)} buttonStyle={styles.button} />
            <Button title={'End Activity'} onPress={() => {
                setFocus((focus) => !focus)
                setActivities((prev) => [...prev, { activity: activity, timeSpent: progress, timeGoal: focusTime }])
            }}
                buttonStyle={styles.backButton} textStyle={styles.backButtonText} />
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
    buttonAddStart: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        backgroundColor: colors.blue,
        marginTop: 10
    },
    buttonAddMiddle: {
        borderRadius: 0,
        backgroundColor: colors.blue,
        marginTop: 10
    },
    buttonAddEnd: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: colors.blue,
        marginTop: 10
    },
    buttonAddText: {
        color: colors.white
    },
    backButton: {
        marginTop: 350,
        backgroundColor: colors.lightBlue,
        height: 50,
        width: 250,
    },
    backButtonText: {
        color: colors.white
    }


})

export default Timer
