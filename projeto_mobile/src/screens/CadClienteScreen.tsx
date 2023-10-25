import CadClientes from "../layouts/CadClientes";
import { CadastroClienteProps } from "../types";

const CadastroClienteScreen = ({navigation, route}: CadastroClienteProps) => {
    return (

        <CadClientes navigation={navigation} route={route} />

    );
};

export default CadastroClienteScreen;