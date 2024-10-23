import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Inicio({navigation}) {
  const Inicio = () => {
    navigation.navigate('Inicio')
  };
  const Perfil = () => {
    navigation.navigate('Perfil')
  };
  const Sobre = () => {
    navigation.navigate('Detector de gás')
  }
  const Acesso = () => {
    navigation.navigate('Acesso')
  }
  const PrimeirosSocor = () => {
    navigation.navigate('Primeiros Socorros')
  }
  const Historico = () => {
    navigation.navigate('Histórico')
  }
  return (
    <View style={estilo.backgroundView}>
      <View style={estilo.mainView}>
        <View style={[estilo.otherViews, { flex: 1/4}]}>
          <Image style={estilo.logo} source={require('../img/logo.png')}/>
          <Image style={estilo.imgInicio} source={require('../img/sensor.png')}/>
        </View> 
        <View style={estilo.views}>
          <TouchableOpacity onPress={Sobre}> 
            <View style={estilo.view}>
              <Image style={estilo.imgView} source={require('../img/Sobre.png')}/>
              <Text style={estilo.text}>Sobre GasSense</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Acesso}> 
            <View style={estilo.view}>
              <Image style={estilo.imgView} source={require('../img/Acesso.png')}/>
              <Text style={estilo.text}>Acesso</Text>
            </View>
          </TouchableOpacity> 
        </View>
        
        <View style={estilo.views}>
          <TouchableOpacity onPress={PrimeirosSocor}> 
          <View style={estilo.view}>
            <Image style={estilo.imgView} source={require('../img/PrimeirosSocor.png')}/>
            <Text style={estilo.text}>Primeiros Socorros</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={Historico}>
            <View style={estilo.view}>
              <Image style={estilo.imgView} source={require('../img/Hist.png')}/>
              <Text style={estilo.text}>Histórico</Text>
            </View>
          </TouchableOpacity>
        </View>  
        <View style={[estilo.otherViews, {flex: 1/8, flexDirection: 'row', marginBottom: -90, marginTop: 15}]}>
          <TouchableOpacity  onPress={Inicio}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/inicioInicio.png')}/></TouchableOpacity>
          <TouchableOpacity onPress={Perfil}><Image style={{width: 50, height: 50, margin: 25}} source={require('../img/perfilInicio.png')}/></TouchableOpacity>
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
      backgroundColor: '#000'
    },
    mainView: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      maxHeight: '770px',
      minHeight: '770px',
      width: '400px',
      backgroundColor: '#000'  
    },
  logo: {
    width: 200, 
    height: 100, 
    marginBottom: 20
  },
  imgInicio: {
    width: 300, 
    height: 190, 
    borderWidth: 5, 
    borderColor: '#079697',
  },
  views: {
    flex: 1/4,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: -85,
  },
  view: {
    backgroundColor: '#fff', 
    paddingTop: 10, 
    paddingBottom: 10,
    borderRadius: 20, 
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 15,
    marginTop: -3 
  },
  imgView: {
    width: 100, 
    height: 100, 
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    color: '#000',
    fontSize: 10
  },
  otherViews: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
