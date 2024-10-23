import { NavigationContainer, ModalScreen } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Telas/Login'
import Cadastro from './Telas/Cadastro';
import Inicio from './Telas/Inicio';
import Perfil from './Telas/Perfil';
import Sobre from './Telas/Sobre';
import Acesso from './Telas/Acesso';
import PrimeirosSocor from './Telas/PrimeirosSocor';
import Historico from './Telas/Historico';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>    
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Inicio" component={Inicio} options={{headerShown: false}}/>
        <Stack.Screen name="Perfil" component={Perfil} options={{headerShown: false}}/>
        <Stack.Screen name="Detector de gás" component={Sobre} options={{}}/>
        <Stack.Screen name="Acesso" component={Acesso} options={{}}/>
        <Stack.Screen name="Primeiros Socorros" component={PrimeirosSocor} options={{}}/>
        <Stack.Screen name="Histórico" component={Historico} options={{}}/>
        <Stack.Screen
        name="Modal"
        component={ModalScreen}
        options={{ presentation: 'transparentModal' }}
  />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}
