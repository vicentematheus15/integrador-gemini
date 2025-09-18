import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import { useState } from 'react'

export default function Login() {
    const [nomeUsuario, setNomeUsuario] = useState()
    const [senha, setSenha] = useState()

    const entrar = () => {
        alert(nomeUsuario)
    }

    return(
        <View>
            <Text>Login</Text>

            <TextInput placeholder='Nome de Usuário'
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
                

            ></TextInput>

            <TextInput placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
                secureTextEntry
            ></TextInput>

            <Button title='Entrar' color='#28a745' onPress={entrar}
            ></Button>


        </View>
    )
}