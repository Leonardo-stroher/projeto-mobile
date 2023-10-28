import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore"
import { Inotas } from "../models/Inota";
import { Alert, FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { ListarNotaProps } from "../types";

export default ({ navigation, route }: ListarNotaProps) => {
    const [notas, setNotas] = useState([] as Inotas[])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('Notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()

                    }

                }) as Inotas[];

                setNotas(data);
                setIsLoading(false);
            });

        return () => subscribe();
    }, []);

    function deletarNota(id: string) {
        setIsLoading(true);

        firestore()
            .collection('Notas')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removida com sucesso")
                navigation.navigate('Home')
            })
            .catch((error) => console.log(error))
            .finally(() => setIsLoading(false));
    }

    function AlterarNota(id: string) {
        navigation.navigate("AlterarNota", { id: id, palavra: 'Pericles' })
    }

    return (
        <View>
            <Text style={{ fontSize: 30, color: 'black' }}>Listagem de notas</Text>
            <FlatList
                data={notas}
                renderItem={(info) => {
                    return (
                        <View style={styles.card}>
                            <View style={styles.dado_card}>
                                <Text>{info.index}</Text>
                                <Text style={{ fontSize: 35 }}>{info.item.titulo}</Text>
                                <Text>{info.item.descricao}</Text>
                            </View>

                            <View style={styles.botao_alterar}>
                                <Pressable
                                    onPress={() => AlterarNota(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 40 }}>
                                        A
                                    </Text>
                                </Pressable>
                            </View>

                            <View style={styles.botao_deletar}>
                                <Pressable
                                    onPress={() => deletarNota(info.item.id)}>
                                    <Text style={{ fontWeight: "bold", fontSize: 50 }}>
                                        X
                                    </Text>
                                </Pressable>

                            </View>
                        </View>
                    );
                }} />
        </View >

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
    }
})