import { NativeStackScreenProps } from "@react-navigation/native-stack";


type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Detalhes: undefined;
    Cadastro: undefined;
    CadastroNota: undefined;
    CadClientes: undefined;
    ListaNota: undefined;
    Nota: undefined;
    AlterarNota: {id: string, palavra: string},
};

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type LoginClienteProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

type CadastrosProps = NativeStackScreenProps<RootStackParamList, 'Cadastro'>;

type CadastroClienteProps = NativeStackScreenProps<RootStackParamList, 'CadClientes'>;

type CadastroNotaProps = NativeStackScreenProps<RootStackParamList, 'CadastroNota'>;

type ListarNotaProps = NativeStackScreenProps<RootStackParamList, 'ListaNota'>;

type AlterarNotaProps = NativeStackScreenProps<RootStackParamList, 'AlterarNota'>;

 type NotaProps = NativeStackScreenProps<RootStackParamList, 'Nota'>;

export type {NotaProps, AlterarNotaProps, HomeProps, RootStackParamList, LoginProps, CadastrosProps, CadastroNotaProps,LoginClienteProps, CadastroClienteProps, ListarNotaProps};