import { useState } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView} from "react-native";
import firestore from "@react-native-firebase/firestore"
import { AlterarClienteProps } from "../types";

export default ({ navigation, route }: AlterarClienteProps) => {
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

    function AlterarCliente() {
        setIsLoading(true);

        firestore()
            .collection('Clientes')
            .doc(id)
            .update({
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
                Alert.alert("Cliente", "Cadastrada com sucesso")
                navigation.navigate('Home')
            })
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text>Nome</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setNome(text)}}/>

                <Text>Cpf</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setCpf(text)}}/>

                <Text>Rua</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setRua(text)}}/>

                <Text>Numero</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setNumero(text)}}/>

                <Text>Complemento</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setComplemento(text)}}/>

                <Text>Bairro</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setBairro(text)}}/>

                <Text>Cidade</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setCidade(text)}}/>

                <Text>Estado</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setEstado(text)}}/>

                <Text>Data Nascimento</Text>
                <TextInput style={styles.box}
                onChangeText={(text) => {setDatanasc(text)}}/>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        backgroundColor: 'black',
        fontSize: 10,
        borderRadius: 2000,

    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    }
})