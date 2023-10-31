import { Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native"
import AtividadeAvaliativa1 from "./AtividadeAvaliativa1"
import AtividadeAvaliativa3 from "./AtividadeAvaliativa3";

const AtividadeAvaliativa2 = ({ navigation, route }: AvatividadeProps) => {

return (
    <View style={[styles.alinharItens, styles.cordefundo]}>
        {<Image
            style={styles.imagem}
            source={require('../assets/imagem-prova.jpg')} />}
        <Text style={styles.texto1}>ATIVIDADES DIPONIVEIS</Text>
        <Pressable
            style={styles.textoBotao}
            onPress={() => navigation.navigate('AtividadeAvaliativa1')} >
            <Text style={styles.textoBotao}>Atividade1</Text>
        </Pressable>
        <Pressable
            style={styles.textoBotao}
            onPress={() => navigation.navigate('AtividadeAvaliativa3')}>
            <Text style={styles.textoBotao}>Atividade3</Text>
        </Pressable>
    </View>
)
}

export default AtividadeAvaliativa2;

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
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 10000,
    },
})