import { StyleSheet } from "react-native";

export const stylesGlobal = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    imgContainer: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    Button: {
        flex: 1,
        width: 100,
        height: 50,
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1565C0',
        textAlign: 'center',
        marginBottom: 10,
    },

    input: {
        height: 50,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 12,
    },
    tarjeta: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 12,
        marginVertical: 10,
    },
    lista: {
        width: '100%',
        marginTop: 10,
    },
    separador: {
        marginTop: 25,
    },
})
