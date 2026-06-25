import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'

const Animaciones5 = () => {
    const [animacion] = useState(new Animated.Value(1))
    
    const presionarBtn = () => {
        Animated.spring(animacion, {
            toValue: 0.8, //valor al que va a llegar
            useNativeDriver: true, // usar el driver nativo para mejor rendimiento
        }).start();
    }

    const soltarBtn = () => {
        Animated.spring(animacion, {
            toValue: 1, //valor al que va a llegar
            friction: 4,
            tension: 10,
            useNativeDriver: true, // usar el driver nativo para mejor rendimiento
        }).start();
    }

    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return (
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={presionarBtn}
                onPressOut={soltarBtn}
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={styles.texto}>Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
           
        </View>

    )
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue', // Azul aciano
        width: 280,
        height: 80,
        justifyContent: 'center',          // Centra el texto verticalmente
        alignItems: 'center'               // Centra el texto horizontalmente
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})

export default Animaciones5