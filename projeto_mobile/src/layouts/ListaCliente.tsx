import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore"
import { Inotas } from "../models/Inota";
import { Alert, FlatList, Pressable, StyleSheet, Text, View, Image } from "react-native";
import { ListarClienteProps, ListarNotaProps } from "../types";
import { IClientes } from "../models/Iclientes";

export default ({ navigation, route }: ListarClienteProps) => {
    const [Cliente, setCliente] = useState([] as IClientes[])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('Cliente')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()

                    }

                }) as IClientes[];

                setCliente(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarCliente(id: string) {
        setIsLoading(true);

        firestore()
            .collection('Cliente')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Cliente", "Removido com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    function AlterarCliente(id: string) {
        navigation.navigate("AlterarCliente", { id: id })
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Listagem de Clientes</Text>
            <FlatList
                data={Cliente}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dado_card}>
                                <Text>{info.index}</Text>
                                <Text style={{ fontSize: 35 }}>{info.item.nome}</Text>
                                <Text>{info.item.cpf}</Text>
                                <Text>{info.item.rua}</Text>
                                <Text>{info.item.complemento}</Text>
                                <Text>{info.item.bairro}</Text>
                                <Text>{info.item.cidade}</Text>
                                <Text>{info.item.estado}</Text>
                                <Text>{info.item.datanasc}</Text>

                            </View>
                            <View style={styles.botao_deletar}>
                                <Pressable
                                    onPress={() => deletarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                                        X
                                    </Text>
                                </Pressable>
                                <Pressable
                                    onPress={() => AlterarCliente(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                                        O
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    );
                }} />

        </View>

    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'black',
        borderWidth: 2,
        borderColor: 'yellow',
        margin: 5,
        borderRadius: 10,
        paddig: 3
    },
    dado_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao_alterar: {
        backgroundColor: 'yellow',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black'
    }
})