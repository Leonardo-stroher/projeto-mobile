import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Detalhes: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type HomeScreenNavigationProp = HomeProps['navigation'];

type HomeScreenRouteProp = HomeProps['route'];


type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type {HomeScreenNavigationProp, HomeScreenRouteProp, HomeProps, RootStackParamList, LoginProps};