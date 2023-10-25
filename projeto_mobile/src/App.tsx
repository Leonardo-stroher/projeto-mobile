import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './layouts/Principal';
import HomeNavigator from './navigation/home.navigator';
import AtividadeAvaliativa1 from './layouts/AtividadeAvaliativa1';
import AtividadeAvaliativa2 from './layouts/AtividadeAvaliativa2';
import AtividadeAvaliativa3 from './layouts/AtividadeAvaliativa3';
import CadClientes from './layouts/CadClientes';




const App = () => {
    return(
       <CadClientes />
        //  <NavigationContainer>
        //   <HomeNavigator /> 
        //  </NavigationContainer>
    );
}


export default App;
