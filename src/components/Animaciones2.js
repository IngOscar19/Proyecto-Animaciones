import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animaciones2 = () => {
  const [animacion] = useState(new Animated.Value(0))
  useEffect(() => {
  Animated.timing(animacion, {
     toValue: 450, 
     duration: 1000, // Reduced for testing
     useNativeDriver: false // <-- This MUST be false for 'width'
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