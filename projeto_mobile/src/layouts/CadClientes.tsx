import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"
import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { CadastroClienteProps, CadastrosProps } from "../types";

export default ({navigation, route}: CadastroClienteProps) => {
    const [id,] = useState(route.params.id)
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [datanasc, setDatanasc] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrarcliente() {
        setIsLoading(true);


        firestore()
            .collection('Cliente')
            .add({
                nome,
                cpf,
                rua,
                numero,
                complemento,
                bairro,
                cidade,
                estado,
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
    return (
        <View style={[styles.alinharItens, styles.cordefundo]}>
            <ScrollView>
            {<Image
                style={styles.imagempanda}
                source={require('../assets/shrek_perfil.jpg')} />}
            <Text style={styles.texto1}>DIGITE SEU NOME</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setNome(text)} />
            <Text style={styles.texto1}>DIGITE SEU CPF</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setCpf(text)} />
                <Text style={styles.texto1}>DIGITE SUA RUA</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setRua(text)} />
            <Text style={styles.texto1}>DIGITE SUA DATA DE NASCIMENTO</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setDatanasc(text)} />
            <Pressable
                style={styles.textoBotao}
                disabled={isLoading}
                onPress={() => cadastrarcliente()} >
                <Text style={styles.textoBotao}>cadastro</Text>
            </Pressable>
            </ScrollView>
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
        backgroundColor: 'green',
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