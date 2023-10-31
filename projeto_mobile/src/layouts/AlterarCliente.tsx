import { useState, useEffect } from "react";
import { Alert, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { ScrollView } from "react-native";
import firestore from "@react-native-firebase/firestore"
import { AlterarClienteProps } from "../types";
import { IClientes } from "../models/Iclientes";

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

    async function carregar() {
        setIsLoading(true);
        const resultado = await firestore()
            .collection('Cliente')
            .doc(id)
            .get();

        const cliente = {
            id: resultado.id,
            ...resultado.data()
        } as IClientes;

        setNome(cliente.nome),
            setCpf(cliente.cpf),
            setRua(cliente.rua),
            setNumero(cliente.numero),
            setComplemento(cliente.complemento),
            setBairro(cliente.bairro),
            setCidade(cliente.cidade),
            setEstado(cliente.estado),
            setDatanasc(cliente.datanasc),
            setIsLoading(false);
    }

    useEffect(() => {
        carregar();

    }, []);

    function contemApenasLetras(valor: string): boolean {
        // Use uma expressão regular para verificar se o valor contém apenas letras maiúsculas ou minúsculas
        return /^[a-zA-Z]+$/.test(valor);
    }

    function contemApenasNumeros(valor: string): boolean {
        // Use uma expressão regular para verificar se o valor contém apenas letras maiúsculas ou minúsculas
        return /^[0-9]+$/.test(valor);
    }

    function validarCampo(): boolean {
        // Verificar se o campo não está vazio
        if (!contemApenasLetras(nome)) {
            console.log('O campo não pode conter numeros');
            return false;
        }
        if (!contemApenasLetras(rua)) {
            console.log('O campo não pode conter numeros.');
            return false;
        }
        if (!contemApenasLetras(complemento)) {
            console.log('O campo não pode conter numeros.');
            return false;
        }
        if (!contemApenasLetras(bairro)) {
            console.log('O campo não pode conter numeros.');
            return false;
        }
        if (!contemApenasLetras(cidade)) {
            console.log('O campo não pode conter numeros.');
            return false;
        }
        if (!contemApenasLetras(estado)) {
            console.log('O campo não pode conter numeros.');
            return false;
        }
        if (!contemApenasNumeros(numero)) {
            console.log('O campo não pode conter letras.');
            return false;
        }
        if (!contemApenasNumeros(cpf)) {
            console.log('O campo não pode conter letras');
            return false;
        }
        return true;
    }

    function validarCampoNumero(campoNumero: number): boolean {
        // Verificar se o campo não está vazio
        if (!campoNumero) {
            console.log('O campo não pode conter letras.');
            return false;
        }



        // Adicione outras verificações conforme necessário

        return true; // Se todas as verificações passarem, o campo é válido
    }

    function AlterarCliente() {
        if (!validarCampo()){
            return;
        }

        setIsLoading(true);

        firestore()
            .collection('Cliente')
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
                Alert.alert("Cliente", "Alterada com sucesso")
                navigation.navigate('HomeNova')
            })
    }

    return (
        <View style={styles.alinharItems}>
            <ScrollView>
                <Text style={styles.texto}>Nome</Text>
                <TextInput style={styles.box}
                    value={nome}
                    onChangeText={(text) => (setNome(text))} />

                <Text style={styles.texto}>Cpf</Text>
                <TextInput style={styles.box}
                    value={cpf}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text style={styles.texto}>Rua</Text>
                <TextInput style={styles.box}
                    value={rua}
                    onChangeText={(text) => { setRua(text) }} />

                <Text style={styles.texto}>Numero</Text>
                <TextInput style={styles.box}
                    value={numero}
                    onChangeText={(text) => { setNumero(text) }} />

                <Text style={styles.texto}>Complemento</Text>
                <TextInput style={styles.box}
                    value={complemento}
                    onChangeText={(text) => { setComplemento(text) }} />

                <Text style={styles.texto}>Bairro</Text>
                <TextInput style={styles.box}
                    value={bairro}
                    onChangeText={(text) => { setBairro(text) }} />

                <Text style={styles.texto}>Cidade</Text>
                <TextInput style={styles.box}
                    value={cidade}
                    onChangeText={(text) => { setCidade(text) }} />

                <Text style={styles.texto}>Estado</Text>
                <TextInput style={styles.box}
                    value={estado}
                    onChangeText={(text) => { setEstado(text) }} />

                <Text style={styles.texto}>Data Nascimento</Text>
                <TextInput style={styles.box}
                    value={datanasc}
                    onChangeText={(text) => { setDatanasc(text) }} />

                <Pressable
                    style={styles.textoBotao}
                    disabled={isLoading}
                    onPress={() => AlterarCliente()} >
                    <Text style={{ fontSize: 40 }}>Alterar</Text>
                </Pressable>

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    texto: {
        color: 'black',
        margin: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'

    },
    alinharItems: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'green'
    },
    box: {
        backgroundColor: 'black',
        fontSize: 10,
        borderRadius: 2000,
        alignItems: 'center',
        justifyContent: 'center',

    },
    container: {
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    textoBotao: {
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 1000,
        margin: 20
    }
})

