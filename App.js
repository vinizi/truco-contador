import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {

  const [pontos, setPontos] = useState(0);

  function diminuir() {
    if (pontos > 0) {
      setPontos(pontos - 1);
    }
  }
  function limite(){
    if (pontos < 12){ 
      setPontos(pontos + 1)
   }else{
    setPontos(0)
   }
}

  return (
    <View style={styles.container}>


      <Image
        source={{ uri: "https://brandigno.com.br/wp-content/uploads/2017/04/thumb-unipar.png" }}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.titulo}>MARCADOR</Text>

      <Text style={styles.pontuacao}>{pontos}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.botaoMais}
          onPress={limite}
        >
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoMenos}
          onPress={diminuir}
        >
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

    padding: 20,
  },

  logo: {
    width: 400,    
    height: 300,   
    marginBottom: 0,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  pontuacao: {
    fontSize: 70,
    fontWeight: 'bold',
    marginVertical: 60,
  },

  botoes: {
    flexDirection: 'row',
  },

  botaoMais: {
    backgroundColor: '#0B6B3A',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginRight: 10, 
  },

  botaoMenos: {
    backgroundColor: '#8B0015',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },

  textoBotao: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});