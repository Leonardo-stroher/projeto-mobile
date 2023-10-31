import { Pressable, View, Button, } from "react-native"
import Pai from "./procrastinando";
import { HomeProps } from "../types";


const HomeNova = ({ navigation, route }: HomeProps) => {
    return (
        <View>

            <Button
                title="Cadastrar Cliente"
                color={'red'}
                onPress={() => navigation.navigate('CadClientes')} />

            <Button
                title="Lista Cliente"
                color={'black'}
                onPress={() => navigation.navigate('ListaCliente')} />

                <Button
                title="Atendimento"
                color={'black'}
                onPress={() => navigation.navigate('CadAtendimento')} />


        </View>
    )
}

export default HomeNova;