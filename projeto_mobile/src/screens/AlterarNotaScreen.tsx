import AlterarNota from "../layouts/AlterarNota";
import { AlterarNotaProps } from "../types";

const AlterarNotaScreen = ({navigation, route}: AlterarNotaProps) => {
    return (

        <AlterarNota navigation={navigation} route={route} />

    );
};

export default AlterarNotaScreen;