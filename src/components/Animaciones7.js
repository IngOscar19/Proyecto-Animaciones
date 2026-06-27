import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const Animaciones7 = () => {
  const [scrollY] = useState(new Animated.Value(0));


  const [animacionesEntrada] = useState([
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
    new Animated.Value(0),
  ]);

  useEffect(() => {
    const animaciones = animacionesEntrada.map((anim) =>
      Animated.spring(anim, {
        toValue: 1,
        friction: 5,
        tension: 30,
        useNativeDriver: true,
      })
    );
    Animated.stagger(150, animaciones).start();
  }, []);


  const escalaBanner = scrollY.interpolate({
    inputRange: [-150, 0],
    outputRange: [1.5, 1],
    extrapolateLeft: 'extend',
    extrapolateRight: 'clamp',
  });

  const opacidadBanner = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const opacidadNavBar = scrollY.interpolate({
    inputRange: [80, 150],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const traslacionTitulo = scrollY.interpolate({
    inputRange: [0, 150],
    outputRange: [0, -30],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.contenedor}>

      <Animated.View style={[styles.navBar, { opacity: opacidadNavBar }]}>
        <Text style={styles.navBarTitulo}>Scroll Animado</Text>
      </Animated.View>


      <Animated.ScrollView
        contentContainerStyle={styles.scrollContent}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >

        <Animated.View
          style={[
            styles.banner,
            {
              opacity: opacidadBanner,
              transform: [{ scale: escalaBanner }, { translateY: scrollY }],
            },
          ]}
        >
          <Animated.View style={[styles.bannerInfo, { transform: [{ translateY: traslacionTitulo }] }]}>
            <Text style={styles.tituloHeader}>Animated.ScrollView</Text>
            <Text style={styles.subtituloHeader}>Efecto Parallax & Desvanecimiento</Text>
          </Animated.View>
        </Animated.View>


        <View style={styles.contenido}>
          {['Tarjeta de Perfil', 'Configuración de Cuenta', 'Notificaciones', 'Seguridad y Privacidad', 'Soporte Técnico'].map((item, index) => {
            const estiloEntrada = {
              opacity: animacionesEntrada[index],
              transform: [
                {
                  scale: animacionesEntrada[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.8, 1],
                  }),
                },
                {
                  translateY: animacionesEntrada[index].interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                  }),
                },
              ],
            };

            return (
              <Animated.View key={index} style={[styles.tarjeta, estiloEntrada]}>
                <View style={styles.circuloIcono} />
                <View style={styles.textoGrupo}>
                  <Text style={styles.tituloTarjeta}>{item}</Text>
                  <Text style={styles.descripcionTarjeta}>
                    Ajustes de personalización para el módulo correspondiente.
                  </Text>
                </View>
              </Animated.View>
            );
          })}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#0f172a',
    width: '100%',
  },
  navBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#334155',
    zIndex: 10,
    paddingTop: 15,
  },
  navBarTitulo: {
    color: '#38bdf8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    paddingTop: 200,
    paddingBottom: 40,
  },
  banner: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
    backgroundColor: '#1e293b',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#38bdf8',
  },
  bannerInfo: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  tituloHeader: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#38bdf8',
    textAlign: 'center',
  },
  subtituloHeader: {
    fontSize: 14,
    color: '#94a3b8',
    marginTop: 6,
    textAlign: 'center',
  },
  contenido: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  circuloIcono: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#38bdf8',
    opacity: 0.2,
    marginRight: 16,
  },
  textoGrupo: {
    flex: 1,
  },
  tituloTarjeta: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  descripcionTarjeta: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 4,
  },
});

export default Animaciones7;
