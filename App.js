import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Focus from './src/features/Focus';
import Timer from './src/features/Timer';
import { colors } from './src/utils/colors';

export default function App() {
  const [isFocused, setFocused] = useState(false)
  const [focusStore, setFocusStore] = useState([])
  const [currentActivity, setCurrentActivity] = useState(null)
  const [activities, setActivities] = useState([])

  console.log(focusStore)
  return (
    <View style={styles.container}>
      {!isFocused ?
        <Focus setFocus={setFocused} setActivity={setCurrentActivity} activities={focusStore} />
        :
        <Timer setFocus={setFocused} setFocusStore={setFocusStore} activity={currentActivity} setActivities={setFocusStore} />
      }
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
