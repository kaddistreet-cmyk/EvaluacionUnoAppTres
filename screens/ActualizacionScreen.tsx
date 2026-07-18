import { Button, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { stylesGlobal } from '../styles/StylesGlobal'
import { supabase } from '../supabase/Config'

export default function ActualizacionScreen() {

    const [idEditar, setIdEditar] = useState('')
    const [ciudad, setCiudad] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const [idEliminar, setIdEliminar] = useState('')

    async function editarCiudad() {

        await supabase
            .from('ciudades')
            .update({
                ciudad: ciudad,
                precio: Number(precio),
                descripcion: descripcion
            })
            .eq('id', idEditar)

        setIdEditar('')
        setCiudad('')
        setPrecio('')
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
                placeholder='Ciudad'
                style={stylesGlobal.input}
                onChangeText={setCiudad}
                value={ciudad}
            />

            <TextInput
                placeholder='Precio'
                style={stylesGlobal.input}
                onChangeText={setPrecio}
                value={precio}
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
