import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhesScreen from "../screens/DetalhesScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import Login from "../layouts/Login";
import LoginScreen from "../screens/LoginScreen";
import CadastroScreen from "../screens/CadastroScreen";
import CadastroNotaScreen from "../screens/CadastroNotaScreen";
import CadastroClienteScreen from "../screens/CadClienteScreen";
import ListaNotaScreen from "../screens/NotaScreen";
import AlterarClienteScreen from "../screens/AlterarClienteScreen";
import AlterarNotaScreen from "../screens/AlterarNotaScreen";
import ListaClienteScreen from "../screens/ListaClienteScreen";
import CadAtendimentoScreen from "../screens/CadAtendimentoScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="CadAtendimento">
                <Stack.Screen name="HomeNova" component={HomeScreen} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="CadastroNota" component={CadastroNotaScreen} />
                <Stack.Screen name="CadClientes" component={CadastroClienteScreen} />
                <Stack.Screen name="CadAtendimento" component={CadAtendimentoScreen} />
                <Stack.Screen name="ListaNota" component={ListaNotaScreen} />
                <Stack.Screen name="ListaCliente" component={ListaClienteScreen} />
                <Stack.Screen name="AlterarCliente" component={AlterarClienteScreen} />
                <Stack.Screen name="AlterarNota" component={AlterarNotaScreen} />
            </Stack.Navigator>
        </>
    )
}

export default HomeNavigator;
