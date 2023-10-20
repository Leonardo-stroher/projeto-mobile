import { Pressable, StyleSheet, Text, TextInput, View, Image, Alert } from "react-native"
import { HomeProps, LoginProps } from "../types";
import auth from "@react-native-firebase/auth";
import { useState } from "react";

const Login = ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function logar() {
        setIsLoading(true);

        if (email && senha) {
            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('Home') })
                .catch((error) => console.log(error))
                .finally(() => setIsLoading(false))
        } else {
            setIsLoading(false);
        }

    }
    function redefinirSenha() {

        if (email && senha) {
            auth()
                .sendPasswordResetEmail(email)
                .then(() => Alert.alert("Redefinir senha", "Enviamos um email pra você"))
                .catch((error) => console.log(error))
        } else {
            setIsLoading(false);
        }
    }
    return (
        <View style={[styles.alinharItens, styles.cordefundo]}>
            {<Image
                style={styles.imagemshureg}
                source={require('../assets/shrek_perfil.jpg')} />}
            <Text style={styles.texto1}>DIGITE SEU EMAIL</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setEmail(text)} />
            <Text style={styles.texto1}>DIGITE SUA SENHA</Text>
            <TextInput
                style={styles.textoimposto}
                onChangeText={(text) => setSenha(text)} />
            <Pressable
                style={styles.textoBotao}
                disabled={isLoading}
                onPress={() => logar()} >
                <Text style={styles.textoBotao}>Logar</Text>
            </Pressable>
            <Pressable
                style={styles.textoBotao}
                onPress={() => redefinirSenha()} >
                <Text style={styles.textoBotao}>Redefinir senha</Text>
            </Pressable>
            <Pressable
                style={styles.textoBotao}
                onPress={() => navigation.navigate('Cadastro')} >
                <Text style={styles.textoBotao}>Se cadastrar</Text>
            </Pressable>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    cordefundo: {
        backgroundColor: '#556B2F',
    },
    texto1: {
        color: 'black',
        alignItems: 'center',
    },
    alinharItens: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    textoBotao: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        backgroundColor: '#6B8E23',
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
    imagemshureg: {
        width: 200,
        height: 200,
        borderRadius: 1000,
    },
    caixatexto: {
        backgroundColor: 'preto',
        color: 'white',
    }
})
