import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Animated, SectionList, TouchableWithoutFeedback } from 'react-native';

const DATA_SELECCIONES = [
  {
    titulo: 'CONMEBOL',
    data: ['Argentina', 'Brasil', 'Uruguay', 'Colombia', 'Ecuador'],
  },
  {
    titulo: 'UEFA',
    data: ['Francia', 'España', 'Alemania', 'Inglaterra', 'Portugal'],
  },
  {
    titulo: 'CONCACAF',
    data: ['México', 'Estados Unidos', 'Canadá'],
  },
];

const TarjetaItem = ({ nombre, index, sectionIndex }) => {
  const [scaleAnim] = useState(new Animated.Value(0));
  const [clickAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    // Animación Spring de entrada escalonada
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 5,
      tension: 40,
      delay: (sectionIndex * 4 + index) * 80, // Retardo progresivo entre secciones y elementos
      useNativeDriver: true,
    }).start();
  }, []);

  const presionarItem = () => {
    Animated.spring(clickAnim, {
      toValue: 0.9,
      useNativeDriver: true,
      friction: 3,
      tension: 40,
    }).start();
  };

  const soltarItem = () => {
    Animated.spring(clickAnim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
      tension: 60,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={presionarItem}
      onPressOut={soltarItem}
    >
      <Animated.View
        style={[
          styles.tarjetaItem,
          {
            transform: [
              { scale: scaleAnim },
              { scale: clickAnim }
            ]
          }
        ]}
      >
        <View style={styles.puntoIndicador} />
        <Text style={styles.textoItem}>{nombre}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const CabeceraSeccion = ({ titulo, sectionIndex }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animación Timing para el desvanecimiento de la cabecera
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 600,
      delay: sectionIndex * 250,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.cabeceraSeccion,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateX: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-50, 0],
              }),
            },
          ],
        },
      ]}
    >
      <Text style={styles.textoCabecera}>{titulo}</Text>
    </Animated.View>
  );
};

const Animaciones9 = () => {
  return (
    <View style={styles.contenedor}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Animated.SectionList</Text>
        <Text style={styles.subtitulo}>Cabeceras (Timing Slide) + Elementos (Spring Pop)</Text>
      </View>

      <Animated.SectionList
        sections={DATA_SELECCIONES}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => {
          // Buscamos el índice de la sección en la data original
          const sectionIndex = DATA_SELECCIONES.findIndex((s) => s.titulo === section.titulo);
          return <TarjetaItem nombre={item} index={index} sectionIndex={sectionIndex} />;
        }}
        renderSectionHeader={({ section }) => {
          const sectionIndex = DATA_SELECCIONES.findIndex((s) => s.titulo === section.titulo);
          return <CabeceraSeccion titulo={section.titulo} sectionIndex={sectionIndex} />;
        }}
        stickySectionHeadersEnabled={false}
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
  cabeceraSeccion: {
    backgroundColor: '#38bdf8',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  textoCabecera: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  tarjetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e293b',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#334155',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  puntoIndicador: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#38bdf8',
    marginRight: 12,
  },
  textoItem: {
    fontSize: 15,
    color: '#f8fafc',
    fontWeight: '500',
  },
});

export default Animaciones9;
