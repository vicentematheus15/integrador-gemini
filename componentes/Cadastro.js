import { useState } from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'
import { useState } from 'react'

export default function Cadastro(){
    const [nomeUsuario, setNomeUsuario] = useState()
    const [senha, setSenha] = useState()

    const cadastrar = () =>{
        alert('Cadastrei')
    }

    return(
        // Tudo isso será mostrado na tela, pois é o que retorna quando eu chamo lá no app.js
        <View>   
            <Text>Cadastro</Text>

            <TextInput placeholder='Nome de usuário'
                value={nomeUsuario}
                onChangeText={setNomeUsuario}
            ></TextInput>

            <TextInput placeholder='Senha'
                value={senha}
                onChangeText={setSenha}
            ></TextInput>

            <Button title='Cadastrar' 
            color='#555'
            onPress={cadastrar}></Button>
        </View>
    )
}