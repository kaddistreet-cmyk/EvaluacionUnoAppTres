import React, { useEffect, useState } from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { stylesGlobal } from '../styles/StylesGlobal'

export default function EnlistarScreen() {

    const [ciudades, setCiudades] = useState<any>([])

    async function leerCiudades() {
        const respuesta = await fetch("https://jritsqmet.github.io/web-api/ciudades2.json")
        const data = await respuesta.json()
        setCiudades(data.ciudades)

    }

    useEffect(() => {
        leerCiudades()
    }, [])

    return (

        <View style={stylesGlobal.container}>

            <Text style={stylesGlobal.titulo}>
                Ciudades
            </Text>

            <FlatList
                data={ciudades}
                renderItem={({ item }) => (

                    <View
                        style={stylesGlobal.container}
                    >
                        <Image
                            source={{ uri: item.informacion.imagen }}
                            style={{
                                width: 150,
                                height: 220,
                                alignSelf: 'center',
                            }}
                        />

                        <Text>
                            Ciudad: {item.nombre}
                        </Text>

                        <Text>
                            Provincia: {item.provincia}
                        </Text>

                        <Text>
                            Descripción: {item.descripcion}
                        </Text>

                    </View>

                )}
            />

        </View>

    )

}
