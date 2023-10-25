import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Detalhes: undefined;
    Cadastro: undefined;
    CadastroNota: undefined;
    CadClientes: undefined;
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type LoginClienteProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastrosProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

type CadastroClienteProps = NativeStackScreenProps<RootStackParamList, 'CadClientes'>;

type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

// type NotaProps = NativeStackScreenProps<RootStackParamList, 'Nota'>;

export type {HomeProps, RootStackParamList, LoginProps, CadastrosProps, CadastroNotaProps,LoginClienteProps};