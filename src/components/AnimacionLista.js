import React, { useState, useEffect } from 'react'
import { View, Text, Animated, StyleSheet } from 'react-native'

const AnimacionLista = () => {
    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(0))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animacion2, {
                    toValue: 20,
                    duration: 1000,
                    useNativeDriver: true
                }),
                Animated.timing(animacion1, {
                    toValue: 60,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animacion2, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(animacion1, {
                    toValue: 30,
                    duration: 500,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, [])

    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { translateX: animacion2 }
        ]
    }

    return (
        <Animated.View style={[styles.contenedor, estiloAnimacion]}>
            
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        width: 50,
        height: 50,
        backgroundColor: 'cornflowerblue'
    }
})

export default AnimacionLista