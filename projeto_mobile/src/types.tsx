import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Detalhes: undefined;
    Cadastro: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastrosProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

export type {HomeProps, RootStackParamList, LoginProps, CadastrosProps};