import { StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Titulo from '../components/titulo';

export default function Naves({ route }) {
    const { item } = route.params;
    const navesPersonagem = item.starships; // Presumindo que isso é um array de URLs
    const [naves, setNaves] = useState([]);

    useEffect(() => {
        const fetchNaves = async () => {
            try {
                const responses = await Promise.all(navesPersonagem.map(url => axios.get(url)));
                const navesData = responses.map(response => response.data);
                setNaves(navesData); 
            } catch (error) {
                console.error('Erro ao buscar os dados', error);
                Alert.alert('Erro', 'Não foi possível carregar os dados.');
            }
        };

        if (navesPersonagem.length > 0) {
            fetchNaves();
        }
    }, [navesPersonagem]);

    return (
        <View style={styles.container}>
            <Titulo nomeTitulo="Naves do Personagem"></Titulo>
            {navesPersonagem.length === 0 ? (
                <Text>Esse personagem não tem naves.</Text>
            ) : (
                <View style={styles.listContainer}>
                <FlatList
                    data={naves}
                    keyExtractor={(nave) => nave.name} 
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Text>Nome: {item.name}</Text>
                            <Text>Modelo: {item.model}</Text> 
                            <Text>Número de passageiros: {item.passengers}</Text>  
                        </View>
                    )}
                />
                </View>
            )}
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
      itemContainer: {
        alignItems: 'center', 
        marginVertical: 10, 
      },
      listContainer: {
        width: '100%', 
        flexGrow: 0, 
      }
});
