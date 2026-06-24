import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animaciones1 from './src/components/Animaciones1';
import Animaciones2 from './src/components/Animaciones2';

export default function App() {
  return (
    <View style={styles.container}>
    <Animaciones2 />
    </View>
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


