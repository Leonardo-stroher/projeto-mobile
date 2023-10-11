import React, {useState} from 'react';
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
} from 'react-native';
import ListaFlat from './lista';
import ListaSection from './listaSection';
import Ex4 from './Ex4';

const lista = [
  {key: 1 , descricao: 'jorge'},
  {key: 2 , descricao: 'markonha'},
  {key: 3 , descricao: 'lucas'},
  {key: 4 , descricao: 'emo filho da puta'},
  {key: 5 , descricao: 'broba'}
];

const listaSection = [
  // {title:'A' , data:[{key: 1, descricao:'Ana'}]},
  // {title:'B' , data:[{key: 2, descricao:'Bruno'}]},
  // {title:'C' , data:[{key: 3, descricao:'Carlos'}]},
  // {title:'D' , data:[{key: 4, descricao:'Douglas'}]},
  // {title:'E' , data:[{key: 5, descricao:'Elio'}]},
  // {title:'F' , data:[{key: 6, descricao:'Fábio'}]}
]


const App2 = () => {
  return(
      <>
      {/* <ListaFlat array = {lista}/> */}
      {/* <ListaSection array = {listaSection}/> */}
      <Ex4 lista={lista}/>
      </>
  );
}


export default App2;

const styles = StyleSheet.create({
  font: {
    backgroundColor: 'black'
  },
  container: {
      backgroundColor: 'yellow',
      borderWidth: 3,
      borderColor: 'red'
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
