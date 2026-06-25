import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Animaciones1 from './src/components/Animaciones1';
import Animaciones3 from './src/components/Animaciones3';
import Animaciones4 from './src/components/Animaciones4';
import Animaciones5 from './src/components/Animaciones5';

export default function App() {
  return (
    <View style={styles.container}>
      <Animaciones5 />
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


