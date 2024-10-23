import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar, Linking } from 'react-native';

export default function App({ navigation }) {
  function linkExternal() {
    Linking.openURL('https://www.canva.com/design/DAGRUareUXk/xulyhgDpAFf7GQz3IMsqBA/edit');
  }
  
  const Inicio = () => {
    navigation.navigate('Inicio');
  };
  
  const Perfil = () => {
    navigation.navigate('Perfil');
  };
  return (
    <View style={estilo.backgroundView}>
      <View style={estilo.mainView}>
        <View style={[estilo.views, { flex: 4/6, marginBottom: -20}]}>
          <Image style={{width: 350, height: 200, borderRadius: 20, marginBottom: 20}} source={require('../img/protoboard.png')}/> 
          <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold',marginBottom: 20}}>Como montar o detector?</Text> 
          <Text style={{color: '#fff', marginLeft: 30, marginRight: 30, fontSize: 17, marginBottom: 25}}>Nosso produto é muito fácil e rápido de montar, você precisará apenas de suas mãos e 30 minutos de tempo livre.</Text>
        <TouchableOpacity onPress={linkExternal} style={estilo.button}>
            <Text style={estilo.buttonText}>Monte já</Text>
          </TouchableOpacity>
        </View>  
        <View style={[estilo.views, { flex: 1/6, flexDirection: 'row'}]}>
          <Image style={{width: 150, height: 150, borderRadius: 20, margin: 10}} source={require('../img/notebook.png')}/>
          <Image style={{width: 150, height: 150, borderRadius: 20, margin: 10}} source={require('../img/arduino.png')}/>
        </View>      
        <View style={[estilo.views, {flex: 1/6, flexDirection: 'row'}]}>
          <TouchableOpacity  onPress={() => Inicio()}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/inicioPerfil.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={() => Perfil()}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/perfilInicio.png')}/></TouchableOpacity>
        </View>  
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  backgroundView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000',
  },
  mainView: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#000',
    maxHeight: '770px',
    minHeight: '770px',
    width: '400px'  
  },
  views: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'transparent', 
    borderWidth: 2, 
    borderColor: '#fff', 
    borderRadius: 20,
    paddingVertical: 20, 
    paddingHorizontal: 110,
  },
  buttonText: {
    fontSize: 15, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center',
  },
});