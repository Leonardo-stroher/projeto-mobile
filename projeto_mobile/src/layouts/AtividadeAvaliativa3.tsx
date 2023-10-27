import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import firestore from "@react-native-firebase/firestore"

const AtividadeAvaliativa3 = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [codigo, setCodigo] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastranota() {
        setIsLoading(true);

        firestore()
        .collection('notas')
            .add({
                nome,
                preco,
                codigo,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
        }
        return (
            <View style={[styles.alinharItens, styles.cordefundo]}>
                {<Image
                    style={styles.imagempanda}
                    source={require('../assets/panda.jpg')} />}
                <Text style={styles.texto1}>DIGITE O NOME DO PRODUTO</Text>
                <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setNome(text)} />
                <Text style={styles.texto1}>DIGITE O PREÇO</Text>
                <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setPreco(text)} />
                    <Text style={styles.texto1}>DIGITE O CODIGO</Text>
                    <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setCodigo(text)} />
                <Pressable
                    style={styles.textoBotao}
                    disabled={isLoading}
                    onPress={(() => cadastranota())}>
                    <Text style={styles.textoBotao}>ARMAZENAR O PRODUTO</Text>
                </Pressable>
            </View>
        )
    
    }
    

export default AtividadeAvaliativa3;

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