import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../services/firebaseAuth';
import { RootStackParamList } from '../types/navigation';
import React from 'react';



export default function RegisterScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    

    const passwordsMatch = confirmPassword === '' || password === confirmPassword;

    const handleRegister = () => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Home');
                // console.log('User registered successfully:', userCredential.user);
                // alert('Registration successful! You can now log in.');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setError('');
            })
            .catch((error) => {

                if (error.code === 'auth/password-too-short') {
                    setError('Password should be at least 6 characters long.');
                    return;
                }
                if (error.code === 'auth/email-already-in-use') {
                    setError('User with this email already exists.');
                    return;
                }
                if (error.code === 'auth/invalid-email') {
                    setError('Invalid email address.');
                    return;
                }
                if (error.code === 'auth/weak-password') {
                    setError('Weak password. Please choose a stronger password.');
                    return;
                }
                console.error('Registration error:', error.message);
                alert(`Registration failed: ${error.message}`);
            });
    };

    const gotoLogin = () => {
        navigation.navigate('Login');
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#999"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={setPassword}
                value={password}
            />
            <TextInput
                style={[
                    styles.input,
                    !passwordsMatch && styles.inputError
                ]}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                secureTextEntry={true}
                autoCapitalize="none"
                onChangeText={setConfirmPassword}
                value={confirmPassword}
            />
            {!passwordsMatch && (
                <Text style={styles.passwordError}>Confirm password does not match.</Text>
            )}
            <View style={styles.buttonContainer}>
                <Button title="Register" onPress={handleRegister} />
            </View>
            <Text style={{ color: 'red' }}>{error}</Text>

                        <TouchableOpacity onPress={gotoLogin}>
                            <Text style={styles.loginText}>Already have an account? Login here</Text>
                        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 40,
        color: '#333',
    },
    input: {
        width: 300,
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    inputError: {
        borderColor: '#ff0000',
        borderWidth: 2,
    },
    passwordError: {
        color: '#ff0000',
        fontSize: 12,
        marginTop: -10,
        marginBottom: 10,
        width: 300,
        textAlign: 'left',
    },
    buttonContainer: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    loginText: {
        color: '#007AFF',
        fontSize: 14,
        marginTop: 10,
    },
});