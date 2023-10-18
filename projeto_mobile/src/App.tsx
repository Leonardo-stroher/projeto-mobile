import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import Principal from './layouts/Principal';
import HomeNavigator from './navigation/home.navigator';




const App = () => {
    return(
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    );
}


export default App;
