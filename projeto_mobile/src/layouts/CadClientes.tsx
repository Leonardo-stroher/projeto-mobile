import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CadastrosProps } from "../types";

export default ({navigation, route}: CadastrosProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [endereco, setEndereco] = useState('');
    const [datanasc, setDatanasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarcliente() {
        setIsLoading(true);

        if (nome && cpf && endereco && datanasc) {

        firestore()
            .collection('Cliente')
            .add({
                nome,
                cpf,
                endereco,
                datanasc,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Cadastrado com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }
}
    return (
        <View style={[styles.alinharItens, styles.cordefundo]}>
            {<Image
                style={styles.imagempanda}
                source={require('../assets/panda.jpg')} />}
            <Text style={styles.texto1}>DIGITE SEU NOME</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setNome(text)} />
            <Text style={styles.texto1}>DIGITE SEU CPF</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setCpf(text)} />
                <Text style={styles.texto1}>DIGITE SEU ENDEREÇO</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setEndereco(text)} />
            <Text style={styles.texto1}>DIGITE SUA DATA DE NASCIMENTO</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setDatanasc(text)} />
            <Pressable
                style={styles.textoBotao}
                disabled={isLoading}
                onPress={() => cadastrarcliente()} >
                <Text style={styles.textoBotao}>Logar</Text>
            </Pressable>
        </View>
    )

}
const styles = StyleSheet.create({
    alinharItens: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    cordefundo: {
        backgroundColor: '#B22222',
    },
    texto1: {
        color: 'black',
        alignItems: 'center',
    },
    textoBotao: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 50,
    },
    textoimposto: {
        width: 300,
        height: 50,
        fontSize: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderRadius: 100,
    },
    imagempanda: {
        width: 200,
        height: 200,
        borderRadius: 10000,
    },
})