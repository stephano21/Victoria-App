import HomeScreen from './../screens/HomeScreen'
import LoginScreen from './../screens/LoginScreen'
import RegisterScreen from './../screens/RegisterScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { Colors } from './../components/Colors'
const Stack = createStackNavigator()

export default function MyStack (){
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.green},
        headerTitleStyle: { color: Colors.ligth },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}