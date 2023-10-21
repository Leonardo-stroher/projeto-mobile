import CadastroNota from "../layouts/CadastroNota";
import { CadastroNotaProps } from "../types";

const CadastroNotaScreen = ({navigation, route}: CadastroNotaProps) => {
    return (

        <CadastroNota navigation={navigation} route={route} />

    );
};

export default CadastroNotaScreen;