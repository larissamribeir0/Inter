import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, {useState} from 'react';


export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const Login = () => {
    navigation.navigate('Inicio')
  }
  return (
    <View style={estilo.backgroundView}>
      <LinearGradient
          colors={['rgba(0,0,0,1)', '#040606', '#040606', '#00091b', '#00091b', '#00091b', '#011706', '#011706',  '#02380f', '#032261', '#033a61', '#045670', '#079697']}
          style={estilo.background}
        />
      <View style={estilo.mainView}>
        <Text style={estilo.title}>Login</Text>
        <Text style={estilo.txt_cadast}>Não possui cadastro? <Text style={estilo.ir_cadast} onPress={() => {navigation.navigate('Cadastro')}}>Clique aqui</Text>.</Text>
        <Text style={estilo.txt}>EMAIL</Text>
        <TextInput style={estilo.txt_input}/>
        <Text style={estilo.txt}>SENHA</Text>
        <TextInput style={estilo.txt_input} secureTextEntry={true}/>
        
        <TouchableOpacity style={estilo.btn} onPress={Login}>
          <Text style={estilo.btn_txt}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
    backgroundView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center'
    },
    mainView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      maxHeight: '770px',
      minHeight: '770px',
      width: '400px'  
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: '100%',
    },
    
    title: {
      fontSize: 35,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 5,
      color: '#fff'
    },
    txt_cadast: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 50,
      color: '#fff'
    },
    txt: {
      fontSize: 15,
      marginRight: 225,
      marginBottom: 10,
      color: '#fff',
    },
    ir_cadast: {
      textDecoration: 'underline'
    },
    txt_input: {
      borderColor: '#afafaf',
      fontSize: 15,
      color: '#fff',
      borderRadius: 20,
      marginBottom: 10,
      outline: 'none',
      backgroundColor: '#a2a2a4',
      width: 290,
      height: 50,
      paddingLeft: 5
      
    },
    btn: {
      marginTop: 15,
      padding: 15,
      paddingLeft: 115,
      paddingRight: 115,
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: '#fff',
      borderRadius: 20,
    },
    btn_txt: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center'
    }
});

