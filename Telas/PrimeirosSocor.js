import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Linking, StatusBar } from 'react-native';

export default function App() {
  function linkExternal() {
    Linking.openURL('https://bvsms.saude.gov.br/bvs/folder/10006003159.pdf');
  }

  const Inicio = () => {
    console.log("Navegando para o início");
  };

  const Perfil = () => {
    console.log("Navegando para o perfil");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Primeiros Socorros</Text>
      </View>

      <Text style={styles.title}>Cuidados com o vazamento de gás</Text>
      <Text style={styles.description}>
        Quando um vazamento ocorre em uma casa, é importante que os moradores
        estejam preparados para os possíveis danos, e para preveni-los, preparamos um guia com os primeiros socorros essenciais.
      </Text>
      <Text style={styles.description}>
        Abaixo segue o download do arquivo com as devidas etapas de proteção:
      </Text>

      <TouchableOpacity style={styles.button} onPress={linkExternal}>
        <Text style={styles.buttonText}>Download</Text>
        <StatusBar style="auto" />
      </TouchableOpacity>

      <View style={[styles.views, { flex: 1 / 6, flexDirection: 'row' }]}>
        <TouchableOpacity onPress={Inicio}>
          <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../img/inicioPerfil.png')} />
        </TouchableOpacity>
        <TouchableOpacity onPress={Perfil}>
          <Image style={{ width: 50, height: 50, margin: 25 }} source={require('../img/perfilInicio.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginTop: 50,
  },
});
