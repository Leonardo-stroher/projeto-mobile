import Login from "../layouts/Login";
import { LoginProps } from "../types";



const LoginScreen = ({navigation, route}: LoginProps) => {
    return (

        <Login navigation={navigation} route={route} />

    );
};

export default LoginScreen;