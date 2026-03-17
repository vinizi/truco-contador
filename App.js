import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function App() {
  // Estados separados para cada time
  const [pontosNos, setPontosNos] = useState(0);
  const [pontosEles, setPontosEles] = useState(0);

  // Função genérica para aumentar pontos, respeitando o limite e zerando ao chegar em 12
  function adicionarPontos(time, quantidade) {
    if (time === 'nos') {
      const novaPontuacao = pontosNos + quantidade;
      if (pontosNos < 12) {
        setPontosNos(novaPontuacao > 12 ? 12 : novaPontuacao);
      } else {
        setPontosNos(0);
      }
    } else if (time === 'eles') {
      const novaPontuacao = pontosEles + quantidade;
      if (pontosEles < 12) {
        setPontosEles(novaPontuacao > 12 ? 12 : novaPontuacao);
      } else {
        setPontosEles(0);
      }
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

  // Função para criar a coluna de botões para um time
  const ColunaDeBotoes = ({ time, adicionar, remover }) => (
    <View style={styles.timeColuna}>
      <Text style={styles.nomeTime}>{time === 'nos' ? 'NÓS' : 'ELES'}</Text>
      <Text style={styles.pontuacao}>{time === 'nos' ? pontosNos : pontosEles}</Text>
      
      <View style={styles.botoesContainer}>
        {/* Fileira + e - */}
        <View style={styles.fileiraSimples}>
          <TouchableOpacity style={styles.botaoMais} onPress={() => adicionar(time, 1)}>
            <Text style={styles.textoBotao}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoMenos} onPress={() => remover(time)}>
            <Text style={styles.textoBotao}>-</Text>
          </TouchableOpacity>
        </View>

        {/* Botões de Aposta */}
        <TouchableOpacity style={styles.botaoTruco} onPress={() => adicionar(time, 3)}>
          <Text style={styles.textoBotaoAposta}>TRUCO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoSeis} onPress={() => adicionar(time, 6)}>
          <Text style={styles.textoBotaoAposta}>SEISSS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoNove} onPress={() => adicionar(time, 9)}>
          <Text style={styles.textoBotaoAposta}>NOVEEE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botaoDozi} onPress={() => adicionar(time, 12)}>
          <Text style={styles.textoBotaoAposta}>DOZI</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header com Logo e Título */}
      <View style={styles.header}>
        <Image
          source={{ uri: "https://brandigno.com.br/wp-content/uploads/2017/04/thumb-unipar.png" }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.titulo}>MARCADOR</Text>
      </View>

      {/* Container do Placar Lado a Lado */}
      <View style={styles.placarContainer}>
        <ColunaDeBotoes time="nos" adicionar={adicionarPontos} remover={removerPonto} />
        <ColunaDeBotoes time="eles" adicionar={adicionarPontos} remover={removerPonto} />
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
    padding: 10,
    paddingBottom: 30,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    marginTop: 30,
  },
  logo: {
    width: 250, // Ajustado para caber melhor
    height: 100,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  placarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  timeColuna: {
    alignItems: 'center',
    width: '46%', // Largura para caber lado a lado com margem
  },
  nomeTime: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  pontuacao: {
    fontSize: 70,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  botoesContainer: {
    width: '100%',
    gap: 10, // Espaçamento vertical entre botões
  },
  fileiraSimples: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  // Estilo base para botões, com as cores da imagem
  botaoMais: {
    backgroundColor: '#006400', // Verde Escuro
    paddingVertical: 12,
    borderRadius: 8,
    width: '48%',
  },
  botaoMenos: {
    backgroundColor: '#8B0000', // Vermelho Escuro (DarkRed)
    paddingVertical: 12,
    borderRadius: 8,
    width: '48%',
  },
  botaoTruco: {
    backgroundColor: '#005F6B', // Azul Petróleo Escuro
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoSeis: {
    backgroundColor: '#002F6C', // Azul Marinho Escuro
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoNove: {
    backgroundColor: '#4B0082', // Roxo (Indigo)
    paddingVertical: 12,
    borderRadius: 8,
  },
  botaoDozi: {
    backgroundColor: '#800000', // Marrom/Vinho Escuro (Maroon)
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
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase', // Garante que fique em maiúsculo
  },
});