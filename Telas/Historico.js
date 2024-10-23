import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

export default function Inicio({navigation}) {
  const HistoricoScreen = () => {}
  const Inicio = () => {
    navigation.navigate('Inicio')
  };
  const Perfil = () => {
    navigation.navigate('Perfil')
  };
  const { width, height } = Dimensions.get('window');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Hoje</Text>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Houve vazamento:</Text>
          <Text style={styles.itemValue}>Sim</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Nível do vazamento:</Text>
          <Text style={styles.itemValue}>Baixo</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Vazamento neutralizado:</Text>
          <Text style={styles.itemValue}>Sim</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>28 de Agosto</Text>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Houve vazamento:</Text>
          <Text style={styles.itemValue}>Não</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Nível do vazamento:</Text>
          <Text style={styles.itemValue}>Nulo</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemLabel}>Vazamento neutralizado:</Text>
          <Text style={styles.itemValue}>Nulo</Text>
        </View>
      </View>
      <View style={[styles.views, {flex: 1/6, flexDirection: 'row'}]}>
          <TouchableOpacity  onPress={() => Inicio()}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/inicioPerfil.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={() => Perfil()}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/perfilInicio.png')}/></TouchableOpacity>
          </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 20,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 20,
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
    fontSize:30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  itemLabel: {
    color: '#fff',
    fontSize: 16,
  },
  itemValue: {
    color: '#00BFFF',
    fontSize: 16,
  },
  views: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'250px',
  },
});

