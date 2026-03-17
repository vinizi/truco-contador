import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);
  const [vitoriasNos, setVitoriasNos] = useState(0);
  const [vitoriasEles, setVitoriasEles] = useState(0);

  function adicionarPontos(time, quantidade) {
    if (time === 'nos') {
      let novoValor = pontosNos + quantidade;
      if (novoValor >= 12) {
        setVitoriasNos(vitoriasNos + 1);
        setPontosNos(0);
        setPontosEles(0);
      } else {
        setPontosNos(novoValor);
      }
    } else {
      let novoValor = pontosEles + quantidade;
      if (novoValor >= 12) {
        setVitoriasEles(vitoriasEles + 1);
        setPontosEles(0);
        setPontosNos(0);
      } else {
        setPontosEles(novoValor);
      }
    }
  }

  function diminuir(time) {
    if (time === 'nos' && pontosNos > 0) setPontosNos(pontosNos - 1);
    if (time === 'eles' && pontosEles > 0) setPontosEles(pontosEles - 1);
  }

  function reiniciarRodada() {
    setPontosNos(0);
    setPontosEles(0);
  }

  function novoJogo() {
    setPontosNos(0);
    setPontosEles(0);
    setVitoriasNos(0);
    setVitoriasEles(0);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: "https://brandigno.com.br/wp-content/uploads/2017/04/thumb-unipar.png" }}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.placarContainer}>
        <View style={styles.timeColuna}>
          <Text style={styles.nomeTime}>NÓS</Text>
          <Text style={styles.pontuacao}>{pontosNos}</Text>
          <Text style={styles.textoVitorias}>Ganhou {vitoriasNos}</Text>
          
          <View style={styles.gridBotoes}>
            <View style={styles.fileiraTop}>
              <TouchableOpacity style={styles.botaoMais} onPress={() => adicionarPontos('nos', 1)}>
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoMenos} onPress={() => diminuir('nos')}>
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoTruco} onPress={() => adicionarPontos('nos', 3)}>
              <Text style={styles.textoBotaoAposta}>TRUCO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoSeis} onPress={() => adicionarPontos('nos', 6)}>
              <Text style={styles.textoBotaoAposta}>SEISSS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNove} onPress={() => adicionarPontos('nos', 9)}>
              <Text style={styles.textoBotaoAposta}>NOVEEE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoDozi} onPress={() => adicionarPontos('nos', 12)}>
              <Text style={styles.textoBotaoAposta}>DOZI</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.timeColuna}>
          <Text style={styles.nomeTime}>ELES</Text>
          <Text style={styles.pontuacao}>{pontosEles}</Text>
          <Text style={styles.textoVitorias}>Ganhou {vitoriasEles}</Text>
          
          <View style={styles.gridBotoes}>
            <View style={styles.fileiraTop}>
              <TouchableOpacity style={styles.botaoMais} onPress={() => adicionarPontos('eles', 1)}>
                <Text style={styles.textoBotao}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoMenos} onPress={() => diminuir('eles')}>
                <Text style={styles.textoBotao}>-</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.botaoTruco} onPress={() => adicionarPontos('eles', 3)}>
              <Text style={styles.textoBotaoAposta}>TRUCO</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoSeis} onPress={() => adicionarPontos('eles', 6)}>
              <Text style={styles.textoBotaoAposta}>SEISSS</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoNove} onPress={() => adicionarPontos('eles', 9)}>
              <Text style={styles.textoBotaoAposta}>NOVEEE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botaoDozi} onPress={() => adicionarPontos('eles', 12)}>
              <Text style={styles.textoBotaoAposta}>DOZI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.controlesFinais}>
        <TouchableOpacity style={styles.botaoControle} onPress={reiniciarRodada}>
          <Text style={styles.textoBotaoControle}>REINICIAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoControle} onPress={novoJogo}>
          <Text style={styles.textoBotaoControle}>NOVO JOGO</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: '50%',
    aspectRatio: 2.5,
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 15,
  },
  timeColuna: {
    alignItems: 'center',
    width: '45%',
  },
  nomeTime: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#666',
  },
  pontuacao: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#333',
    lineHeight: 85,
  },
  textoVitorias: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 20,
  },
  gridBotoes: {
    width: '100%',
    gap: 8,
  },
  fileiraTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  botaoMais: {
    backgroundColor: '#055e34',
    paddingVertical: 12,
    borderRadius: 8,
    width: '47%',
  },
  botaoMenos: {
    backgroundColor: '#870d28',
    paddingVertical: 12,
    borderRadius: 8,
    width: '47%',
  },
  botaoTruco: {
    backgroundColor: '#00555e',
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoSeis: {
    backgroundColor: '#00255a',
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoNove: {
    backgroundColor: '#4a0063',
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoDozi: {
    backgroundColor: '#5e0000',
    paddingVertical: 12,
    borderRadius: 8,
  },
  textoBotao: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textoBotaoAposta: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  controlesFinais: {
    marginTop: 30,
    width: '60%',
    gap: 10,
  },
  botaoControle: {
    backgroundColor: '#150d0a',
    paddingVertical: 12,
    borderRadius: 12,
  },
  textoBotaoControle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});