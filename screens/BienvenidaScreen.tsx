import { Button, Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { stylesGlobal } from '../styles/StylesGlobal';

export default function BienvenidaScreen({ NavigationContainer, navigation }: any) {

    const [nombre, setNombre] = useState("")
    return (

        < ImageBackground
            style={stylesGlobal.container}
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRc-uP60bpWf6njkBiWcvyUbL3PN5Ws1vvlhoYgT3iRECVe5Jk5kkZk8e&s=10' }
            }>

            <TextInput
                style={stylesGlobal.input}
                placeholder="INGRESA TU NOMBRE"
                value={nombre}
                onChangeText={setNombre}
            />

            < Button
                title='ir a menú'
                onPress={() => navigation.navigate("Top")
                }
            />
        </ ImageBackground >
    )
}

