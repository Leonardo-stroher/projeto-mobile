import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Detalhes: undefined;
    Cadastro: undefined;
    CadastroNota: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastrosProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

type NotaProps = NativeStackScreenProps<RootStackParamList, 'Nota'>;

export type {HomeProps, RootStackParamList, LoginProps, CadastrosProps, CadastroNotaProps, NotaProps};