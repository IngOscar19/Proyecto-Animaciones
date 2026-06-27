import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native';

const Animaciones6 = () => {
  const [opacityAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

  const presionarImagen = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  const soltarImagen = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 60,
    }).start();
  };

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Animated.Image</Text>
      <Text style={styles.subtitulo}>Timing (Carga) + Spring (Presión)</Text>

      <TouchableWithoutFeedback
        onPressIn={presionarImagen}
        onPressOut={soltarImagen}
      >
        <Animated.View
          style={[
            styles.tarjetaImagen,
            {
              opacity: opacityAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}
        >
          <Animated.Image
            source={{ uri: 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c515.png' }}
            style={styles.imagen}
            resizeMode="contain"
          />
        </Animated.View>
      </TouchableWithoutFeedback>

      <Text style={styles.indicador}>¡Mantén pulsada la imagen para ver el efecto Spring!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#0f172a', // Slate oscuro elegante
    width: '100%'
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#38bdf8', // Azul celeste premium
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 40,
    textAlign: 'center',
  },
  tarjetaImagen: {
    width: 260,
    height: 260,
    borderRadius: 24,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#38bdf8',
    backgroundColor: '#1e293b',
    shadowColor: '#38bdf8',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  imagen: {
    width: '100%',
    height: '100%',
  },
  indicador: {
    marginTop: 30,
    fontSize: 14,
    color: '#64748b',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});

export default Animaciones6;
