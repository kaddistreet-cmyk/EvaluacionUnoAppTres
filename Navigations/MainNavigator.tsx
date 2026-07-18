import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import BienvenidaScreen from "../screens/BienvenidaScreen"
import ActualizacionScreen from '../screens/ActualizacionScreen';
import ConsultaScreen from '../screens/ConsultaScreen';
import RegistroScreen from '../screens/RegistroScreen';


const Stack = createStackNavigator()
const Top = createMaterialTopTabNavigator()

//Satck
function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Bienvenido' component={BienvenidaScreen} />
            <Stack.Screen name='Top' component={MyTop} />
        </Stack.Navigator>
    )
}

//TOP TAB
function MyTop() {
    return (
        <Top.Navigator>
            <Top.Screen name='Registro' component={RegistroScreen} />
            <Top.Screen name='Consulta' component={ConsultaScreen} />
            <Top.Screen name='Actualizacion' component={ActualizacionScreen} />
        </Top.Navigator>
    )
}

export function MainNavegador() {
    return (
        <NavigationContainer> <MyStack/> </NavigationContainer>
    )
}