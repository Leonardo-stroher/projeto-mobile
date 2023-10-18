import { Pressable, StyleSheet, Text, TextInput, View, Image } from "react-native"
import { HomeProps } from "../types";


const Login = ({ navigation, route }: HomeProps) => {
    return (
        <View style={styles.texto1}>
            <Text>DIGITE SEU EMAIL</Text>
            <TextInput style={styles.textoimposto} />
            <Pressable
                style={styles.texto1}
                onPress={() => navigation.navigate('Detalhes')} >
                    <Text style={styles.textoBotao}>teste2</Text>
                </Pressable>
            {<Image
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
    textoBotao: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold',
        justifyContent:'space-between',
    },
    textoimposto: {
        width:300,
        height:70,
        fontSize:10,
        justifyContent:'space-between'
    }
});