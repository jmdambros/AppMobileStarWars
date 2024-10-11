import { StyleSheet, Text, View } from 'react-native';

export default function Sobre() {
  return (
    <View style={styles.container}>
    <Text style = {styles.titulo}>Desenvolvedores</Text>
    <Text style = {styles.texto}>Augusto Zanin</Text>
    <Text style = {styles.texto}>João Marcelo Dambrós</Text>
    <Text style = {styles.texto}></Text>
    <Text style = {styles.texto}></Text>
    <Text style = {styles.subtitle}>Contato</Text>
    <Text style = {styles.subtitle}>augustozann@gmail.com</Text>
    <Text style = {styles.subtitle}>jmcdambros@gmail.com</Text>
    <Text style = {styles.subtitle}></Text>
    <Text style = {styles.subtitle}>RA's</Text>
    <Text style = {styles.subtitle}>Augusto - 1135355</Text>
    <Text style = {styles.subtitle}>João - 1134696 </Text>
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

  texto: {
    fontSize: 20
  },

  titulo: {
    fontSize: 30
  },

  subtitle: {
    fontSize: 15
  }
});

