import { useState } from 'react'
import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export default function Cadastro(){
    const [nomeUsuario, setNomeUsuario] = useState()
    const [senha, setSenha] = useState()

    const cadastrar = () =>{
        alert('Cadastrei')
    }

    return(
        // Tudo isso será mostrado na tela, pois é o que retorna quando eu chamo lá no app.js
        <View>   
{/* // ovalue recebe a variavel que criamos no useState (nomeUsuario)
// o value recebe o método (setUseState)
//isso é equivalente ao "getElementsByID" */}
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