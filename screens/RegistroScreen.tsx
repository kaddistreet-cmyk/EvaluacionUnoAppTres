import { Alert, Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { stylesGlobal } from '../styles/StylesGlobal'
import { supabase } from '../supabase/Config'

export default function RegistroScreen() {
    const [id, setId] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')

    async function guardarCiudad() {

        const { error } = await supabase.from('ciudades').insert({
            id: id,
            ciudad: ciudad,
            precio: Number(precio),
            descripcion: descripcion
        })

        if (error) {
            Alert.alert('Error', 'No se pudo registrar la ciudad')
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
                onChangeText={setId}
                value={id} />

            <TextInput
                placeholder='Ingresar ciudad'
                style={stylesGlobal.input}
                onChangeText={setCiudad}
                value={ciudad} />

            <TextInput
                placeholder='Costo del paquete turístico'
                style={stylesGlobal.input}
                onChangeText={setPrecio}
                value={precio} />

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
