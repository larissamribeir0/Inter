import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PrimeirosSocorrosScreen = () => {
  const handleDownload = () => {
    console.log('Iniciando download...');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Acesso ao GasSense</Text>
      </View>

      <Text style={styles.title}>Como se conectar ao sensor de Gás?</Text>
      <Text style={styles.description}>
        Conecte seu aparelho ao GasSystem com seu wifi para saber sobre a segurança da sua casa.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleDownload}>
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>

      <View style={[styles.views, {flex: 1/6, flexDirection: 'row'}]}>
          <TouchableOpacity  onPress={() => Inicio()}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/inicioPerfil.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={() => Perfil()}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/perfilInicio.png')}/></TouchableOpacity>
          </View>
    </View>
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
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  views: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'250px',
  },
});

export default PrimeirosSocorrosScreen;
