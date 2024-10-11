import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Botao from '../components/botao'

export default function DetalhesPersonagem({ route, navigation }) {
    const {item} = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.nomePersonagem}>Nome do personagem : {item.name}</Text>
      <Text style={styles.caracteristicasTexto}>Altura : {item.height}cm</Text>
      <Text style={styles.caracteristicasTexto}>Peso : {item.mass}Kg</Text>
      <Text style={styles.caracteristicasTexto}>Cor do cabelo : {item.hair_color}</Text>
      <Text style={styles.caracteristicasTexto}>Cor da pele : {item.skin_color}</Text>
      <Text style={styles.caracteristicasTexto}>Cor dos olhos : {item.eye_color}</Text>
      <Text style={styles.caracteristicasTexto}>Gênero : {item.gender}</Text>
      <View style={styles.containerBotoes}>
        <Botao texto="Naves" onPress={() => navigation.navigate('Naves', {item})}></Botao>
        <Botao texto="Filmes" onPress={() => navigation.navigate('Filmes', {item})}></Botao>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center', 
    },
    caracteristicasTexto:{
        fontSize: 20,
        padding: 5,
        margin: "1%",
        textAlign: 'center',
    },
    nomePersonagem:{
        fontSize: 20,
        marginBottom: "5%",
        textAlign: 'center',
    },
    containerBotoes:{
        flexDirection: 'row', 
        justifyContent: 'space-around', 
        marginTop: 20,
    }
})
