import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Keyboard } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Register: undefined;
};
type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProp;
}



const LoginScreen = ({ navigation }: LoginScreenProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState('');
    const [cedula, setCedula] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Correo"
                placeholderTextColor="#DEAD1D"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Cédula"
                placeholderTextColor="#DEAD1D"
                keyboardType="numeric"
                maxLength={10} 
                value={cedula}
                onChangeText={(text) => setCedula(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Ususario"
                placeholderTextColor="#DEAD1D"
                value={user}
                onChangeText={(text) => setUser(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña" placeholderTextColor="#DEAD1D"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')} >
                <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.link}>Ya tiene una cuenta? Iniciar sesión</Text>
            </TouchableOpacity>
        </View>
    )

}
export default LoginScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    input: {
        width: '80%',
        height: 50,
        padding: 10,
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#4B4342',
        marginBottom: 20,
        color: '#4B4342',
    },
    button: {
        width: '80%',
        backgroundColor: '#DEAD1D',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    link:{
        marginTop:10,
        color:'#4B4342',
        fontWeight: 'bold',

    }
});