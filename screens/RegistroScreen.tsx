import { Alert, Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { stylesGlobal } from '../styles/StylesGlobal'
import { supabase } from '../supabase/Config'

export default function RegistroScreen() {
    const [id, setId] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [descripcion, setDescripcion] = useState('')

    async function guardarCiudad() {

        const { error } = await supabase.from('ciudades').insert({
            id: id,
            nombre: nombre,
            precio: Number(precio),
            descripcion: descripcion
        })

        if (error) {
            Alert.alert('Error', error.message)
            return
        }
        Alert.alert('Registro', 'Ciudad registrada correctamente')
    }

    return (
        <View style={stylesGlobal.container}>
            <Text style={stylesGlobal.titulo}>Registro de ciudades</Text>
            <TextInput
                placeholder='Ingresar ID'
                style={stylesGlobal.input}
                onChangeText={(text) => setId(text)}
            />

            <TextInput
                placeholder='Ingresar ciudad'
                style={stylesGlobal.input}
                onChangeText={setNombre}
            />

            <TextInput
                placeholder='Costo del paquete turístico'
                style={stylesGlobal.input}
                onChangeText={(text) => setPrecio(+text)}
            />

            <TextInput
                placeholder='Ingresar descripción'
                style={stylesGlobal.input}
                onChangeText={setDescripcion} />

            <Button
                title='Guardar'
                onPress={guardarCiudad} />

        </View>
    )
}
