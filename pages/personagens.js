import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Titulo from '../components/titulo'

export default function Personagens({ navigation }) {
  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    const fetchPersonagens = async () => {
      try {
        const response = await axios.get('https://swapi.dev/api/people/');
        console.log(response.data.results); // Verificar o formato dos dados recebidos
        setPersonagens(response.data.results); // Salvar a lista de personagens
      } catch (error) {
        console.error('Erro ao buscar os dados', error);
        Alert.alert('Erro', 'Não foi possível carregar os dados.');
      }
    };

    fetchPersonagens();
  }, []); // Executa uma vez quando o componente é montado

  return (
    <View style={styles.container}>
      <View style={styles.container_titulo}>
          <Titulo nomeTitulo="Lista de Personagens"/>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={personagens}
          keyExtractor={(personagem) => personagem.name} 
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <TouchableOpacity style={styles.itemBotao} onPress={() => navigation.navigate('Detalhes do Personagem', {item})}>
              <Text style={styles.itemText}>{item.name}</Text>  
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  listContainer: {
    width: '100%', 
    flexGrow: 0, 
  },
  itemContainer: {
    alignItems: 'center', 
    marginVertical: 10, 
  },
  itemText: {
    fontSize: 18,
  },
  itemBotao:{
    backgroundColor: 'white', 
    padding: 5,
    borderRadius: 10, 
    elevation: 5
  },
  container_titulo:{
    marginBottom: "5%"
  }
});

