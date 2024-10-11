import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Titulo = ({nomeTitulo}) => {
  return (
    <View>
      <Text style={styles.title}>{nomeTitulo}</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', 
  },
});