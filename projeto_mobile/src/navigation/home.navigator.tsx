import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalhesScreen from "../screens/DetalhesScreen";
import HomeScreen from "../screens/HomeScreen";
import { RootStackParamList } from "../types";
import Login from "../layouts/Login";
import LoginScreen from "../screens/LoginScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detalhes" component={DetalhesScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
            </Stack.Navigator>
        </>
    )
}

export default HomeNavigator;
