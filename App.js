import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AnimacionLista from './src/components/AnimacionLista';
import AnimatedEjercicio from './src/components/AnimatedEjercicio';


import Animaciones1 from './src/components/Animaciones1';
import Animaciones2 from './src/components/Animaciones2';
import Animaciones3 from './src/components/Animaciones3';
import Animaciones4 from './src/components/Animaciones4';
import Animaciones5 from './src/components/Animaciones5';
import Animaciones6 from './src/components/Animaciones6';
import Animaciones7 from './src/components/Animaciones7';
import Animaciones8 from './src/components/Animaciones8';
import Animaciones9 from './src/components/Animaciones9';


const ANIMACIONES = [
  { id: '1', nombre: 'Animación 1', desc: 'Opacidad básica', tech: 'Animated.View (Timing)', comp: Animaciones1 },
  { id: '2', nombre: 'Animación 2', desc: 'Escalar Ancho', tech: 'Animated.View (Timing)', comp: Animaciones2 },
  { id: '3', nombre: 'Animación 3', desc: 'Escalar Tamaño Fuente', tech: 'Animated.Text (Timing)', comp: Animaciones3 },
  { id: '4', nombre: 'Animación 4', desc: 'Rotación Interpolada', tech: 'Animated.View (Timing)', comp: Animaciones4 },
  { id: '5', nombre: 'Animación 5', desc: 'Efecto de Presión Botón', tech: 'Animated.View (Spring)', comp: Animaciones5 },
  { id: '6', nombre: 'Animación 6', desc: 'Entrada y Presión de Imagen', tech: 'Animated.Image (Timing/Spring)', comp: Animaciones6 },
  { id: '7', nombre: 'Animación 7', desc: 'Efecto Parallax Scroll', tech: 'Animated.ScrollView (Event/Timing)', comp: Animaciones7 },
  { id: '8', nombre: 'Animación 8', desc: 'Entrada Escalonada de Lista', tech: 'Animated.FlatList (Timing/Spring)', comp: Animaciones8 },
  { id: '9', nombre: 'Animación 9', desc: 'Categorías Agrupadas', tech: 'Animated.SectionList (Timing/Spring)', comp: Animaciones9 },
  { id: '10', nombre: 'Animación 10', desc: 'Animación de Lista Loop/Secuencia', tech: 'Animated.loop (Timing)', comp: AnimacionLista },
  { id: '11', nombre: 'Animación 11', desc: 'Descenso, Expansión Elástica y Caída', tech: 'Animated (Sequence/Spring/Timing)', comp: AnimatedEjercicio },
];

export default function App() {
  const [selectedAnim, setSelectedAnim] = useState(null);

  const CurrentComp = selectedAnim ? ANIMACIONES.find(a => a.id === selectedAnim)?.comp : null;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      {selectedAnim ? (
        <View style={styles.viewContainer}>
          <View style={styles.navigationHeader}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setSelectedAnim(null)}
              activeOpacity={0.7}
            >
              <Text style={styles.backButtonText}>← Volver</Text>
            </TouchableOpacity>
            <Text style={styles.headerTitle} numberOfLines={1}>
              {ANIMACIONES.find(a => a.id === selectedAnim)?.nombre}
            </Text>
          </View>

          <View style={styles.animContent}>
            {CurrentComp && <CurrentComp />}
          </View>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.menuContainer} showsVerticalScrollIndicator={false}>
          <Text style={styles.menuTitle}>Animaciones</Text>


          <View style={styles.grid}>
            {ANIMACIONES.map((anim) => (
              <TouchableOpacity
                key={anim.id}
                style={styles.card}
                onPress={() => setSelectedAnim(anim.id)}
                activeOpacity={0.7}
              >
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{anim.id}</Text>
                </View>
                <View style={styles.cardInfo}>
                  <Text style={styles.cardNombre}>{anim.nombre}</Text>
                  <Text style={styles.cardDesc}>{anim.desc}</Text>
                  <Text style={styles.cardTech}>{anim.tech}</Text>
                </View>
                <Text style={styles.arrowIcon}>→</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  viewContainer: {
    flex: 1,
  },
  navigationHeader: {
    height: 60,
    backgroundColor: '#1e293b',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#334155',
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#334155',
  },
  backButtonText: {
    color: '#38bdf8',
    fontSize: 14,
    fontWeight: 'bold',
  },
  headerTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    flex: 1,
  },
  animContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    padding: 24,
    paddingBottom: 40,
  },
  menuTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#f8fafc',
    textAlign: 'center',
    marginTop: 20,
  },
  menuSubtitle: {
    fontSize: 15,
    color: '#94a3b8',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 32,
  },
  grid: {
    gap: 16,
  },
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#334155',
    // Sombra suave
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#38bdf8',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  badgeText: {
    color: '#0f172a',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardInfo: {
    flex: 1,
  },
  cardNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f8fafc',
  },
  cardDesc: {
    fontSize: 13,
    color: '#94a3b8',
    marginTop: 2,
  },
  cardTech: {
    fontSize: 11,
    color: '#38bdf8',
    fontWeight: '600',
    marginTop: 6,
    textTransform: 'uppercase',
  },
  arrowIcon: {
    color: '#38bdf8',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
