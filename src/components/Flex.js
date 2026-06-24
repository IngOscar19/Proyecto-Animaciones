import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caja1}></View>
      <View style={styles.caja2}></View>
      <View style={styles.caja3}></View>
      <View style={styles.caja4}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    flexDirection: 'row', //direccion donde van a estar los elementos
    justifyContent: 'space-between' //el spacio entre los elementos
  },
  caja1: {
    flex: 2,
    padding: 20,
    backgroundColor: 'navy'
  },
  caja2: {
    flex: 1,
    padding: 20,
    backgroundColor: 'yellow'
  },
  caja3: {
    padding: 20,
    backgroundColor: 'red'
  },
  caja4: {
    padding: 20,
    backgroundColor: 'green'
  }
})

export default App


