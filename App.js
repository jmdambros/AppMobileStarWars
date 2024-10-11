import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Personagens from './pages/personagens';
import DetalhesPersonagem from './pages/detalhesPersonagem';
import Naves from './pages/naves';
import Filmes from './pages/filmes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagens">
      <Stack.Screen name = 'Personagens' component={Personagens}/>
      <Stack.Screen name = 'Detalhes do Personagem' component={DetalhesPersonagem}/>
      <Stack.Screen name = 'Naves' component={Naves}/>
      <Stack.Screen name = 'Filmes' component={Filmes}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
