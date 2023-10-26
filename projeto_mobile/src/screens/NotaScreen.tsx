import CadastroNota from "../layouts/CadastroNota";
import ListaNota from "../layouts/ListaNota";
import { ListarNotaProps, NotaProps } from "../types";

const ListaNotaScreen = ({navigation, route}: ListarNotaProps) => {
    return (

        <ListaNota navigation={navigation} route={route} />

    );
};

export default ListaNotaScreen;