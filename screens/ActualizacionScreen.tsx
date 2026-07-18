import { Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { stylesGlobal } from '../styles/StylesGlobal'
import { supabase } from '../supabase/Config'

export default function ActualizacionScreen() {

    const [idEditar, setIdEditar] = useState('')
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState(0)
    const [descripcion, setDescripcion] = useState('')

    const [idEliminar, setIdEliminar] = useState('')

    async function editarCiudad() {

        await supabase
            .from('ciudades')
            .update({
                nombre: nombre,
                precio: Number(precio),
                descripcion: descripcion
            })
            .eq('id', idEditar)

        setIdEditar('')
        setNombre       ('')
        setPrecio(0)
        setDescripcion('')
    }

    async function eliminarCiudad() {

        await supabase
            .from('ciudades')
            .delete()
            .eq('id', idEliminar)

        setIdEliminar('')
    }

    return (

        <View style={stylesGlobal.container}>

            <Text style={stylesGlobal.titulo}>
                Editar Ciudad
            </Text>

            <TextInput
                placeholder='Ingrese Id'
                style={stylesGlobal.input}
                onChangeText={setIdEditar}
                value={idEditar}
            />

            <TextInput
                placeholder='Nombre'
                style={stylesGlobal.input}
                onChangeText={setNombre}
            />

            <TextInput
                placeholder='Precio'
                style={stylesGlobal.input}
                onChangeText={(text) => setPrecio(Number(text))}
            />

            <TextInput
                placeholder='Descripción'
                style={stylesGlobal.input}
                onChangeText={setDescripcion}
                value={descripcion}
            />

            <Button
                title='Editar'
                onPress={editarCiudad}
                color='#0f833b'
            />

            <View style={{ marginTop: 30 }} />

            <TextInput
                placeholder='Ingrese Id'
                style={stylesGlobal.input}
                onChangeText={setIdEliminar}
                value={idEliminar}
            />

            <Button
                title='Eliminar'
                onPress={eliminarCiudad}
                color='#a80909'
            />

        </View>
    )
}
