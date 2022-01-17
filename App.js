import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from './app/components/common/AppText';
import Screen from './app/components/common/Screen';

export default function App() {
  return (
   <Screen>
     <AppText>Hello, training React Native UI</AppText>
   </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
