import HomeScreen from './../screens/HomeScreen'
import LoginScreen from './../screens/LoginScreen'
import RegisterScreen from './../screens/RegisterScreen'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator()

export default function MyStack (){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>        
      <Stack.Screen name="Register" component={RegisterScreen}/>        
    </Stack.Navigator>
  )
} 