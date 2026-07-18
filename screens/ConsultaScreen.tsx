import { Alert, Button, FlatList, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { stylesGlobal } from '../styles/StylesGlobal'
import { supabase } from '../supabase/Config'

export default function ConsultaScreen() {

    const [id, setId] = useState('')
    const [Nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [lista, setLista] = useState<any[]>([])

    async function buscarCiudad() {

        const { data, error } = await supabase
            .from('ciudades')
            .select('*')
            .eq('id', id)

        if (error || data.length === 0) {
            Alert.alert('Error', 'No se encontró la ciudad')
        } else {
            setNombre(data[0].nombre)
            setPrecio(data[0].precio.toString())
            setDescripcion(data[0].descripcion)
        }
    }

    async function listarCiudades() {

        const { data, error } = await supabase
            .from('ciudades')
            .select('*')

        if (error) {
            Alert.alert('Error', 'No existen registros')
        } else {
            setLista(data)
        }
    }

    return (

        <View style={stylesGlobal.container}>

            <Text style={stylesGlobal.titulo}>
                Buscar Ciudad
            </Text>

            <TextInput
                placeholder='Ingrese el ID'
                style={stylesGlobal.input}
                onChangeText={setId}
                value={id}
            />

            <Button
                title='Buscar'
                onPress={buscarCiudad}
                color='#0f833b'
            />

            <View style={stylesGlobal.tarjeta}>
                <Text>Nombre: {Nombre}</Text>
                <Text>Precio: {precio}</Text>
                <Text>Descripción: {descripcion}</Text>
            </View>

            <Button
                title='Mostrar Ciudades'
                onPress={listarCiudades}
                color='#072f6b'
            />

            <FlatList
                style={stylesGlobal.lista}
                data={lista}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={stylesGlobal.tarjeta}>
                        <Text>ID: {item.id}</Text>
                        <Text>Ciudad: {item.ciudad}</Text>
                        <Text>Precio: {item.precio}</Text>
                        <Text>Descripción: {item.descripcion}</Text>
                    </View>
                )}
            />

        </View>
    )
}
