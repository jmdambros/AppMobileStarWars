import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const Botao = ({texto, onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.botao} onPress={onPress}>
            <Text style={styles.texto}>{texto}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Botao

const styles = StyleSheet.create({
    botao:{
    backgroundColor: 'white', 
    padding: 15,
    borderRadius: 10, 
    elevation: 5,
    },
    texto:{
        fontSize: 20,
    }
})