import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Focus from './src/features/Focus';
import { colors } from './src/utils/colors';

export default function App() {
  const [isFocused, setFocused] = useState(false)
  return (
    <View style={styles.container}>
      {!isFocused ?
        <Focus />
        : <Text>You are focusing</Text>
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
