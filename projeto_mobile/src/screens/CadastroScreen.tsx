import Cadastro from "../layouts/Cadastro";
import { CadastrosProps } from "../types";

const CadastroScreen = ({navigation, route}: CadastrosProps) => {
    return (

        <Cadastro navigation={navigation} route={route} />

    );
};

export default CadastroScreen;