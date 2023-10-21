import { useState, useEffect } from "react";
import firestore from "@react-native-firebase/firestore"
import { Inotas } from "../models/Inota";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default ({ navigation, route }: ListarNotasProps) => {
    const [notas, setNotas] = useState([] as Inotas[])
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        const subscribe = firestore()
            .collection('notas')
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

    return (
        <View>
            <Text style={{ fontSize: 30}}>Listagem de notas</Text>
            <FlatList
            data={notas}
            renderItem={(info) => {
                return (
                    <View style={styles.card}>
                        <Text>{info.index}</Text>
                        <Text>{info.item.titulo}</Text>
                        <Text>{info.item.descricao}</Text>

                    </View>
                );
            }}/>

            </View>
        
    );
}

const styles = StyleSheet.create ({
    card:{
        borderWidth:2,
        borderColor: 'yellow',
        margin: 5,
        borderRadius: 10,
        paddig: 3
    }
})