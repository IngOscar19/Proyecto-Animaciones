import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animaciones1 = () => {
  const [animacion] = useState(new Animated.Value(0))
  useEffect(() => {
    Animated.timing(animacion, {
       toValue: 1, //valor al que va a llegar
       duration: 500, //duracion de la animacion
       useNativeDriver: true, // usar el driver nativo para mejor rendimiento
    }).start();
  }, [])

  return (
    <Animated.View style={{ opacity: animacion }}>
      <Text style={styles.texto}>Animacion 1</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFF'
  }
})

export default Animaciones1