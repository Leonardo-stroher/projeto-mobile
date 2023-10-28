import ListaCliente from "../layouts/ListaCliente";
import { ListarClienteProps } from "../types";

const ListaClienteScreen = ({navigation, route}: ListarClienteProps) => {
    return (

        <ListaCliente navigation={navigation} route={route} />

    );
};

export default ListaClienteScreen;