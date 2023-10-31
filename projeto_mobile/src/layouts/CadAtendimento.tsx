import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore"
import { useState } from "react";
import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { CadAtendimentoProps, CadastroClienteProps, CadastrosProps } from "../types";

export default ({ navigation, route }: CadAtendimentoProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [id, setId] = useState('');
    const [data, setData] = useState('');
    const [hora, setHora] = useState('');
    const [descricao, setDescri] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function cadastraratendimento() {
        setIsLoading(true);


        firestore()
            .collection('Atendimento')
            .add({
                nome,
                cpf,
                id,
                data,
                hora,
                descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Atendimento", "Cadastrado com sucesso")
                navigation.navigate('HomeNova')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }
    return (

        <ScrollView style={[ styles.cordefundo]}>
            <View style={[styles.alinharItens,]} >
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
                <Text style={styles.texto1}>DIGITE SEU ID</Text>
                <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setId(text)} />
                <Text style={styles.texto1}>DIGITE A DATA</Text>
                <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setData(text)} />
                <Text style={styles.texto1}>DIGITE HORA</Text>
                <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setHora(text)} />
                <Text style={styles.texto1}>DIGITE DESCRIÇÃO</Text>
                <TextInput
                    style={styles.textoimposto}
                    onChangeText={(text) => setDescri(text)} />
            </View>
        </ScrollView>

    )

}
const styles = StyleSheet.create({
    alinharItens: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,

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
        margin:20
    },
    imagempanda: {
        width: 200,
        height: 200,
        borderRadius: 10000,
    },
})