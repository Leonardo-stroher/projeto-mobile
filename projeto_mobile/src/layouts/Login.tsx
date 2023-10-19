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

        auth()
            .signInWithEmailAndPassword(email, senha)
            .then(() => { navigation.navigate('Home') })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false))
    }
    function redefinirSenha() {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha", "Enviamos um email pra você"))
            .catch((error) => console.log(error))
    }
    
    return (
        <View style={styles.alinharItens}>
            <Text>DIGITE SEU EMAIL</Text>
            <TextInput style={styles.textoimposto} />
            <Pressable
                style={styles.textoBotao}
                onPress={() => logar()} >
                    <Text style={styles.textoBotao}>teste2</Text>
                </Pressable>
            {<Image
                style={styles.imagemshureg}
                source={require('../assets/_b490053a-38ec-45ad-a8c2-a49340df71f8.jpg')} />}
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    texto1: {
        backgroundColor: 'blue',
        alignItems: 'center',
    },
    alinharItens: {
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: 'blue',
        flex:1
    },
    textoBotao: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent:'space-between',
        backgroundColor:'#7CFC00',
    },
    textoimposto: {
        width:300,
        height:50,
        fontSize:15,
        justifyContent:'space-between',
        backgroundColor:'black'
    },
    imagemshureg: {
       width:300,
        height:300,
    },
    caixatexto: {
        backgroundColor: 'preto',
        color:'white',
    }
});