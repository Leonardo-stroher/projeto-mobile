import auth from "@react-native-firebase/auth";
import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { CadastrosProps } from "../types";

export default ({navigation, route}: CadastrosProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastrar() {
        setIsLoading(true);

        if (email && senha) {

        auth()
            .createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert("Conta", "Cadastro com sucesso")
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.log(error);
                Alert.alert("Erro",
                String(error))
            })
            .finally(() => setIsLoading(false))
        } else setIsLoading(false);
    }

    return (
        <View style={[styles.alinharItens, styles.cordefundo]}>
            {<Image
                style={styles.imagempanda}
                source={require('../assets/panda.jpg')} />}
            <Text style={styles.texto1}>DIGITE SEU EMAIL PARA CADASTRO</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setEmail(text)} />
            <Text style={styles.texto1}>DIGITE SUA SENHA PARA CADASTRO</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setSenha(text)} />
            <Pressable
                style={styles.textoBotao}
                disabled={isLoading}
                onPress={() => cadastrar()} >
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