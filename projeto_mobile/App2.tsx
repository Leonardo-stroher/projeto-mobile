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

const App2 = () => {
  return(<>
    <Ex1 titulo = 'TITULO'/>
  </>
  );
}
 export default App2;

type Ex1Props = {
  titulo: string;
}

const Ex1 = (props: Ex1Props) => {
  return <>
      <View style={styles.font}>
          <Text>{props.titulo}</Text>
          <TextInput style={styles.caixaTexto}/>
      </View>
  </>
}


const Ex2 = () => {
  return <ScrollView>
      <View style={styles.container2}>
          <Image style={styles.imagem} source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}/>

          <Image style={styles.imagem} source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}/>

          <Image style={styles.imagem} source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}/>

          <Image style={styles.imagem} source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}/>

          <Image style={styles.imagem} source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}/>
      </View>
  </ScrollView>
}


const Ex3 = () => {
    const [texto, setTexto] = useState('');

    return <>
        <View style={styles.container3}>
            <Text>{texto}</Text>
            <TextInput 
                style={styles.caixaTexto2}
                onChangeText={(text) => {setTexto(text)}}/>
        </View>
    </>
}



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

export {Ex1, Ex2, Ex3};

const lista = [
  {key: 1 , descricao: 'teste1'},
  {key: 2 , descricao: 'teste2'},
  {key: 3 , descricao: 'teste3'},
  {key: 4 , descricao: 'teste4'},
  {key: 5 , descricao: 'teste5'}
];


const App2 = () => {
  return(
      <>
      <ListaFlat arrays(lista)/>
      <ListaSection arrays(listaSection)/>
      </>
  );
}

export default App2;