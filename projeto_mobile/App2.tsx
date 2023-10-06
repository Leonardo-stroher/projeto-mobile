import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App2 = () => {
    return(
        <>
    <Text>    BIMBAS</Text>
    <Text>    BIMBAS</Text>
    <Text>    BIMBAS</Text>
    <View style = {styles.container}><Text>    SHREK</Text></View>
    </>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'green'   
},
});

export default App2;