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

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Cadastro" component={CadastroScreen} />
                <Stack.Screen name="CadastroNota" component={CadastroNotaScreen} />
                <Stack.Screen name="CadClientes" component={CadastroClienteScreen} />
                <Stack.Screen name="ListaNota" component={ListaNotaScreen} />
            </Stack.Navigator>
        </>
    )
}

export default HomeNavigator;
