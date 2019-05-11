import React from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter, MegaSena } from './componentes/mult'

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        
        <ParImpar numero={13} />
        <Inverter texto = 'React Nativo!' />
        <MegaSena numeros={12} />
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }

})