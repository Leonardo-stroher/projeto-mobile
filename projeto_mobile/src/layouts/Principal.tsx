import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TextInput,
  Image,
  Button,
} from 'react-native';
import ListaFlat from './lista';
import ListaSection from './listaSection';
import Ex4 from './Ex4';

const lista = [
  { key: 1, descricao: 'jorge' },
  { key: 2, descricao: 'markonha' },
  { key: 3, descricao: 'lucas' },
  { key: 4, descricao: 'emo filho da puta' },
  { key: 5, descricao: 'broba' }
];
import { HomeProps } from '../types';
import ExemploStylesText from './ExemploStylesText';
import ExemploStylesView from './ExemploStyleView';
import Login from './Login';
import Pai from './procrastinando';
import HomeNova from './HomeNova';


// const lista = [
// { key: 1, descricao: 'jorge' },
// { key: 2, descricao: 'markonha' },
// { key: 3, descricao: 'lucas' },
// { key: 4, descricao: 'emo filho da puta' },
// { key: 5, descricao: 'broba' }
// ];

const listaSection = [
  // {title:'A' , data:[{key: 1, descricao:'Ana'}]},
  // {title:'B' , data:[{key: 2, descricao:'Bruno'}]},
  // {title:'C' , data:[{key: 3, descricao:'Carlos'}]},
  // {title:'D' , data:[{key: 4, descricao:'Douglas'}]},
  // {title:'E' , data:[{key: 5, descricao:'Elio'}]},
  // {title:'F' , data:[{key: 6, descricao:'Fábio'}]}
]

const Principal = ({ navigation, route }: HomeProps) => {
  return (
    <>
    <View style={styles.container}>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Detalhes')} />
      
        <Button
          title="Listar Notas"
          color={'green'}
          onPress={() => navigation.navigate('ListaNota')} />

        <Button
          title="Cadastrar Nota"
          color={'blue'}
          onPress={() => navigation.navigate('CadastroNota')} /> */}
{/* 
        <Button
          title="Cadastrar Cliente"
          color={'red'}
          onPress={() => navigation.navigate('CadClientes')} />

          <Button
          title="Lista Cliente"
          color={'black'}
          onPress={() => navigation.navigate('ListaCliente')} />

          <Button
          title="Cadastro atendimento"
          color={'black'}
          onPress={() => navigation.navigate('CadAtendimento')} /> */}

          <HomeNova />
        <Pai /> 
      </View>
      {/* <ListaFlat array = {lista}/> */}
      {/* <ListaSection array = {listaSection}/> */}
      {/* <Ex4 lista={lista} /> */}
      {/* <ExemploStylesText /> */}
      {/* <ExemploStylesView /> */}

    </>
  );
}


export default Principal;

const styles = StyleSheet.create({
  font: {
    backgroundColor: 'black'
  },
  container: {
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'red',
    flex: 1
  },
  caixaTexto: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'orange'

  },
  container2: {
    backgroundColor: 'green',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imagem: {
    width: 200,
    height: 200
  },
  container3: {
    backgroundColor: 'yellow',
    borderWidth: 3,
    borderColor: 'red'
  },
  caixaTexto2: {
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'orange'

  }
});
