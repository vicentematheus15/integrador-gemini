import {View, Text, Button, TextInput, StyleSheet} from 'react-native'
import { useState } from 'react'

export default function Login() {
    const [nomeUsuario, setNomeUsuario] = useState()
    const [senha, setSenha] = useState()


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


        </View>
    )
}