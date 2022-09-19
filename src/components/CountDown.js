import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { StyleSheet, Text } from 'react-native'
import { colors } from '../utils/colors'

const CountDown = () => {

    const [number, setNumber] = useState(130)
    let interval = useRef(null)

    const decreaseNumber = () => {
        setNumber((prev) => prev - 1)
    }

    useEffect(() => {
        interval.current = setInterval(decreaseNumber, 1000)
        return () => clearInterval(interval.current);
    }, [])

    const minutes = Math.floor(number / 60) % 60
    const seconds = number % 60

    console.log(seconds)
    return (
        <Text style={styles.text}>{minutes} {seconds}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.white
    }
})

export default CountDown
