import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animaciones2 = () => {
  const [animacion] = useState(new Animated.Value(0))
  useEffect(() => {
    Animated.timing(animacion, {
       toValue: 450, //valor al que va a llegar
       duration: 10000, //duracion de la animacion
       useNativeDriver: true, // usar el driver nativo para mejor rendimiento
    }).start();
  }, [])

  return (
    <Animated.View style={[styles.caja, { width: animacion }]}>
      
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  caja: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
    alignSelf: 'center',
    marginTop: 20
  }
})

export default Animaciones2