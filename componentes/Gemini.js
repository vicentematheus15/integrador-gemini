import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native'

export default function Gemini () {
const [prompt, setPrompt] = useState();
const [resposta, setResposta] = useState();

const enviarPrompt = async () => {
    const apiKey = 'AIzaSyAfSv6vU1KhdLkot5MT0mLw5j4Hzs6L5os';
    const ulr = ``;

    const resposta = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'aplication/json'},
        body: {
            "contents": [
              {
                "parts": [
                  {
                    "text": "Explain how AI works in a few words"
                  }
                ]
              }
            ]
          }
    })
}

    return(
        <View>
            <Text>
                Gemini
            </Text>

            <TextInput placeholder='Prompt ao Gemini'
                value={prompt}
                onChangeText={setPrompt}            
            ></TextInput>

            <Button onPress={enviarPrompt}
            title='Enviar'
            color='#555'
            ></Button>

            <Text>
                {resposta}
            </Text>
        </View>
    )
}