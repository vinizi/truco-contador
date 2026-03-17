import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  // Estados separados para cada time
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

  // Função genérica para aumentar pontos (limite de 12)
  function adicionarPonto(time) {
    if (time === 'nos') {
      pontosNos < 12 ? setPontosNos(pontosNos + 1) : setPontosNos(0);
    } else {
      pontosEles < 12 ? setPontosEles(pontosEles + 1) : setPontosEles(0);
    }
  }

  // Função genérica para diminuir pontos
  function removerPonto(time) {
    if (time === 'nos' && pontosNos > 0) {
      setPontosNos(pontosNos - 1);
    } else if (time === 'eles' && pontosEles > 0) {
      setPontosEles(pontosEles - 1);
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

      <View style={styles.placarContainer}>
        {/* Coluna Time NÓS */}
        <View style={styles.timeColuna}>
          <Text style={styles.nomeTime}>NÓS</Text>
          <Text style={styles.pontuacao}>{pontosNos}</Text>
          
          <View style={styles.botoesVertical}>
            <TouchableOpacity 
              style={styles.botaoMais} 
              onPress={() => adicionarPonto('nos')}
            >
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.botaoMenos} 
              onPress={() => removerPonto('nos')}
            >
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Coluna Time ELES */}
        <View style={styles.timeColuna}>
          <Text style={styles.nomeTime}>ELES</Text>
          <Text style={styles.pontuacao}>{pontosEles}</Text>
          
          <View style={styles.botoesVertical}>
            <TouchableOpacity 
              style={styles.botaoMais} 
              onPress={() => adicionarPonto('eles')}
            >
              <Text style={styles.textoBotao}>+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.botaoMenos} 
              onPress={() => removerPonto('eles')}
            >
              <Text style={styles.textoBotao}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    width: '100%',
    height: 150,
    marginTop: 40,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  placarContainer: {
    flexDirection: 'row', // Coloca um time ao lado do outro
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  timeColuna: {
    alignItems: 'center',
    width: '45%',
  },
  nomeTime: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#555',
  },
  pontuacao: {
    fontSize: 80,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  botoesVertical: {
    width: '100%',
    gap: 10, // Espaçamento entre botões
  },
  botaoMais: {
    backgroundColor: '#0B6B3A',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  botaoMenos: {
    backgroundColor: '#8B0015',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  textoBotao: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});