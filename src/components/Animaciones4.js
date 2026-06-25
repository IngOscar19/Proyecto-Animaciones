import { View, Text, Animated, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

const Animaciones4 = () => {
    const [animacion] = useState(new Animated.Value(0))
    useEffect(() => {
        Animated.timing(animacion, {
            toValue: 360, //valor al que va a llegar
            duration: 500, //duracion de la animacion
            useNativeDriver: true, // usar el driver nativo para mejor rendimiento
        }).start();
    }, [])

    const interpolacion = animacion.interpolate({
        inputRange:[0,360], //rango de entrada de estos
        outputRange:['0deg','360deg'] //rango de salida
    })

    const estiloAnimacion = {
        transform: [{rotate: interpolacion}]
    }

    return (
        <View>
            <Animated.View
                style={[styles.caja, estiloAnimacion]}
            ></Animated.View>
        </View>

    )
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height:100,
        backgroundColor: 'blue',
       
    }
})

export default Animaciones4