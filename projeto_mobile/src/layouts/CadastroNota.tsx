import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore"
import { CadastroNotaProps } from "../types";

export default ({ navigation, route }: CadastroNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastranota() {
        setIsLoading(true);

        firestore()
            .collection('Notas')
            .add({
                titulo,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Nota", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }
    return (
        <View style={styles.alinharItens}>
            {<Image style={styles.foto}
                source={require('../assets/Barry.jpg')} />}
            <Text style={styles.texto}>DIGITE O TITULO</Text>
            <TextInput style={styles.textoimposto}
                numberOfLines={10}
                maxLength={100}
                onChangeText={(text) => setTitulo(text)} />
            <Text style={styles.texto}>DIGITE DESCRIÇÃO</Text>
            <TextInput style={styles.textoimposto}
                onChangeText={(text) => setDescricao(text)} />
            <Pressable
                style={styles.textoBotao}
                disabled={isLoading}
                onPress={() => cadastranota()} >
                <Text style={styles.textoBotao}>Cadastrar</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    texto: {
        color: 'black'
    },
    alinharItens: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#FFA500'
    },
    foto: {
        width: 200,
        height: 200,
        borderRadius: 10000,
    },
    textoimposto: {
        width: 300,
        height: 50,
        fontSize: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderRadius: 100,
    },
    textoBotao: {
        color: 'yellow',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        borderRadius: 50,
    },
})