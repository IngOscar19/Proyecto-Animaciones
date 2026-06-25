import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animaciones3 = () => {
    const [animacion] = useState(new Animated.Value(14))
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 40, //valor al que va a llegar
            duration: 500, //duracion de la animacion
            //useNativeDriver: true, // usar el driver nativo para mejor rendimiento
        }).start();
    }, [])

    return (
        <View>
            <Animated.Text style={[styles.texto, { fontSize: animacion }]}>Texto Animado</Animated.Text>
        </View>

    )
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})

export default Animaciones3