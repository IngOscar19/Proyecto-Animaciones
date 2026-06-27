import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, FlatList, TouchableWithoutFeedback } from 'react-native';

const EQUIPOS = [
  { id: '1', nombre: 'Club América', rendimiento: '90%', color: '#fde047' },
  { id: '2', nombre: 'Chivas de Guadalajara', rendimiento: '75%', color: '#ef4444' },
  { id: '3', nombre: 'Cruz Azul', rendimiento: '95%', color: '#2563eb' },
  { id: '4', nombre: 'Tigres UANL', rendimiento: '85%', color: '#f59e0b' },
  { id: '5', nombre: 'Rayados de Monterrey', rendimiento: '82%', color: '#1e40af' },
  { id: '6', nombre: 'Pumas UNAM', rendimiento: '70%', color: '#b45309' },
];

const TarjetaEquipo = ({ equipo, index }) => {
  const [entradaAnim] = useState(new Animated.Value(0));
  const [escalaAnim] = useState(new Animated.Value(1));

  useEffect(() => {

    Animated.timing(entradaAnim, {
      toValue: 1,
      duration: 500,
      delay: index * 100,
      useNativeDriver: true,
    }).start();
  }, []);

  const presionarTarjeta = () => {

    Animated.spring(escalaAnim, {
      toValue: 0.95,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  const soltarTarjeta = () => {

    Animated.spring(escalaAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 60,
    }).start();
  };

  const estiloEntrada = {
    opacity: entradaAnim,
    transform: [
      { scale: escalaAnim },
      {
        translateX: entradaAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [200, 0],
        }),
      },
    ],
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={presionarTarjeta}
      onPressOut={soltarTarjeta}
    >
      <Animated.View style={[styles.tarjeta, estiloEntrada, { borderLeftColor: equipo.color }]}>
        <View style={styles.cuerpoTarjeta}>
          <Text style={styles.nombreEquipo}>{equipo.nombre}</Text>
          <Text style={styles.dtEquipo}>DT: {equipo.dt}</Text>
          <View style={styles.contenedorProgreso}>
            <View style={[styles.barraProgreso, { width: equipo.rendimiento, backgroundColor: equipo.color }]} />
          </View>
        </View>
        <View style={styles.porcentajeContainer}>
          <Text style={[styles.porcentajeTexto, { color: equipo.color }]}>{equipo.rendimiento}</Text>
        </View>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const Animaciones8 = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Animated.FlatList</Text>
        <Text style={styles.subtitulo}>Deslizamiento Stagger (Timing) + Rebote (Spring)</Text>
      </View>

      <Animated.FlatList
        data={EQUIPOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <TarjetaEquipo equipo={item} index={index} />}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0f172a',
    width: '100%',
  },
  header: {
    padding: 24,
    backgroundColor: '#1e293b',
    borderBottomWidth: 1,
    borderColor: '#334155',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#38bdf8',
  },
  subtitulo: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 6,
    textAlign: 'center',
  },
  lista: {
    padding: 20,
    paddingBottom: 40,
  },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 5,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  cuerpoTarjeta: {
    flex: 1,
  },
  nombreEquipo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  dtEquipo: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  contenedorProgreso: {
    height: 6,
    backgroundColor: '#334155',
    borderRadius: 3,
    marginTop: 10,
    width: '90%',
    overflow: 'hidden',
  },
  barraProgreso: {
    height: '100%',
    borderRadius: 3,
  },
  porcentajeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  porcentajeTexto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Animaciones8;
