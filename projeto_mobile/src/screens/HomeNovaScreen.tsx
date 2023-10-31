import HomeNova from "../layouts/HomeNova";
import { HomeProps } from "../types";
import { View } from "react-native";

const HomeNovaScreen = ({ navigation, route }: HomeProps) =>{
    return (
        <View style={{flex: 1,}}>
            <HomeNova navigation={navigation} route={route} />
        </View>
    );
};

export default HomeNovaScreen;