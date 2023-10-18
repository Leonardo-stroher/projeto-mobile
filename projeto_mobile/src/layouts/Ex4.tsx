import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import ListaFlat from './lista';

type Ex4Props = {
    lista: { key: number; descricao: String }[];
}

const Ex4 = (props: Ex4Props) => {
    return <>
        <View style={styles.container}>

            <ListaFlat array={props.lista} />
        </View>
    </>
}

export default Ex4;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderWidth: 3,
        borderColor: 'white',
    },
    caixaTexto: {
        backgroundColor: 'blue',
        borderWidth: 3,
        borderColor: 'green'

    }
});