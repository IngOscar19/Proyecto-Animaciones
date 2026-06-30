import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'

const AnimatedEjercicio = () => {
    const [animacion1] = useState(new Animated.Value(0))
    const [animacion2] = useState(new Animated.Value(1))

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.parallel([
                    Animated.timing(animacion1, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true
                    }),
                    Animated.timing(animacion2, {
                        toValue: 1,
                        duration: 0,
                        useNativeDriver: true
                    })
                ]),
                Animated.timing(animacion1, {
                    toValue: 200,
                    duration: 1500,
                    useNativeDriver: true
                }),
                Animated.spring(animacion2, {
                    toValue: 10,
                    friction: 3,  
                    tension: 30,  
                    useNativeDriver: true
                }),
                //vuelve a su forma original
                Animated.spring(animacion2, {
                    toValue: 1,
                    friction: 4,
                    tension: 40,
                    useNativeDriver: true
                }),
                //cae linealmente
                Animated.timing(animacion1, {
                    toValue: 650,
                    duration: 2000,
                    easing: Easing.linear,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, [])

    
    const estiloAnimacion = {
        transform: [
            { translateY: animacion1 },
            { scale: animacion2 }
        ]
    }

    return (
        <View style={styles.contenedor}>
            <Animated.View style={[styles.caja, estiloAnimacion]} />
        </View>
    )
}

export default AnimatedEjercicio

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        backgroundColor: '#0f172a',
        width: '100%',
        alignItems: 'center',
        paddingTop: 50,
    },
    caja: {
        width: 40,
        height: 40,
        backgroundColor: '#38bdf8', 
        borderRadius: 8,
    }
})
