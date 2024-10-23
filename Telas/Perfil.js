import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Perfil({navigation}) {
  const Inicio = () => {
    navigation.navigate('Inicio')
  };
  const Perfil = () => {
    navigation.navigate('Perfil')
  };
  const Login = () => {
    navigation.navigate('Login')
  }
  return (
    <View style={estilo.backgroundView}>
      <View style={estilo.mainView}>
      <View style={[estilo.views, { flex: 5/6, marginTop: 1}]}>
          <Image style={estilo.logo} source={require('../img/logo.png')}/>
          <Image style={{width: 200, height: 200, marginBottom: 15}} source={require('../img/fotoPerfil.png')}/>
          <Text style={estilo.nome} >Nome Completo </Text>
          <View>
            <Text style={estilo.dados}>Email:</Text>
            <Text style={estilo.dados}>Senha:</Text>
            <Text style={estilo.dados}>Endereço:</Text>
            <Text style={estilo.dados}>Rua</Text>
            <Text style={estilo.dados}>Bairro</Text>
            <Text style={[estilo.dados, {marginBottom: 25}]}>Cidade</Text>
            </View>
          <TouchableOpacity onPress={Login}><Text style= {{color: '#fff', textDecoration: 'underline', fontSize: 24, marginTop: 10}}onPre>Sair da conta</Text></TouchableOpacity>
        </View>      
        <View style={[estilo.views, {flex: 1/6, flexDirection: 'row'}]}>
          <TouchableOpacity  onPress={Inicio}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/inicioPerfil.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={Perfil}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/perfilPerfil.png')}/></TouchableOpacity>
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
    alignItems: 'center',
    marginBottom: -20
  },
  logo: {
    width: 200, 
    height: 100, 
    marginBottom: 25
  },
  nome: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20
  },
  dados: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 5,
  }
  
});