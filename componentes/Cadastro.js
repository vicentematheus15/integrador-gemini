import {View, Text, TextInput, Button, StyleSheet} from 'react-native'

export default function Cadastro(){
    return(
        <View>
            <Text>Cadastro</Text>
            <TextInput placeholder='Nome de usuário'></TextInput>
            <TextInput placeholder='Senha'></TextInput>
            <Button title='Cadastrar' color='#555'></Button>

        </View>
    )
}