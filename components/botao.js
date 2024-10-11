import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Audio } from 'expo-av'

const Botao = ({texto, onPress}) => {
  return (
    <View>
      <TouchableOpacity 
        style={styles.botao} 
        onPress={async () => {
          await playSound(); 
          if (onPress) {
            onPress(); 
          }
        }}
      >
        <Text style={styles.texto}>{texto}</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Botao

const playSound = async () => {
  const { sound } = await Audio.Sound.createAsync(
    require('../assets/sound_effect.mp3')
  );
  await sound.playAsync(); 
};

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
