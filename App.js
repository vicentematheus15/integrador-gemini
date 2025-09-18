import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './componentes/Cadastro';
import Login from './componentes/Login'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Olá mundo!</Text>
{/* o cadastro.js aparece na tela porque a função criada lá RETORNA o que deve ser mostrado */}
      <Login></Login>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
