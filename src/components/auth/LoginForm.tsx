import react, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LoginScreenProps } from './../../../types';

const LoginForm = ({ navigation }: LoginScreenProps ): JSX.Element=> {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Ususario"
                placeholderTextColor="#DEAD1D"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña" placeholderTextColor="#DEAD1D"
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.link}>Registrarse</Text>
            </TouchableOpacity>
        </View>
    )

}

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
    link: {
        marginTop: 10,
        color: '#4B4342',
        fontWeight: 'bold',

    }
});
export default LoginForm;