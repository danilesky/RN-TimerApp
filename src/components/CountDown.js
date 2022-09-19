import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../utils/colors'

const formatTime = (time) => {
    return time < 10 ? `0${time}` : time
}

const CountDown = ({ trackTime, isPaused, onProgress }) => {

    const [number, setNumber] = useState(0)
    let interval = useRef(null)



    const decreaseNumber = () => {
        setNumber((prev) => {
            if (prev === 0) {
                return prev
            }
            return prev - 1
        })
        onProgress(number)
    }

    useEffect(() => {
        setNumber(() => {
            return !trackTime ? 0 : trackTime
        })
    }, [trackTime])

    useEffect(() => {
        if (!isPaused) {
            clearInterval(interval.current)
            return
        }
        interval.current = setInterval(decreaseNumber, 1000)
        return () => { clearInterval(interval.current) };
    }, [isPaused])

    useEffect(() => {
        onProgress(number)
    }, [number])

    const minutes = Math.floor(number / 60) % 60
    const seconds = number % 60

    return (
        <Text style={styles.text}>{formatTime(minutes)} : {formatTime(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: 50,
        fontWeight: '700'
    }
})

export default CountDown
