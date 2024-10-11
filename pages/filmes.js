import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Titulo from '../components/titulo';

export default function Filmes({ route }) {
  const { item } = route.params;
  const filmesPersonagem = item.films; 
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const fetchFilmes = async () => {
        try {
            const responses = await Promise.all(filmesPersonagem.map(url => axios.get(url)));
            const filmesData = responses.map(response => response.data);
            setFilmes(filmesData); 
        } catch (error) {
            console.error('Erro ao buscar os dados', error);
            Alert.alert('Erro', 'Não foi possível carregar os dados.');
        }
    };

    if (filmesPersonagem.length > 0) {
      fetchFilmes();
    }
}, [filmesPersonagem]);

  return (
    <View style={styles.container}>
    <Titulo nomeTitulo="Filmes do Personagem"></Titulo>
    {filmesPersonagem.length === 0 ? (
        <Text>Esse personagem não tem filmes.</Text>
    ) : (
        <View style={styles.listContainer}>
        <FlatList
            data={filmes}
            keyExtractor={(filme) => filme.title} 
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Text>Nome: {item.title}</Text>
                    <Text>Diretor: {item.director}</Text>
                    <Text>Data do lançamento: {item.release_date}</Text>
                </View>
            )}
        />
        </View>
    )}
</View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center', 
    justifyContent: 'center', 
  },
  itemContainer: {
    alignItems: 'center', 
    marginVertical: 10, 
  },
  listContainer: {
    width: '100%', 
    flexGrow: 0, 
  }
})