
import CadAtendimento from "../layouts/CadAtendimento";
import { CadAtendimentoProps } from "../types";


const CadAtendimentoScreen = ({navigation, route}: CadAtendimentoProps) => {
    return (

        <CadAtendimento navigation={navigation} route={route} />

    );
};

export default CadAtendimentoScreen;