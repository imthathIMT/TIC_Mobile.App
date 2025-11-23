import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { signInWithEmailAndPassword } from '@firebase/auth';
import auth from '../services/firebaseAuth';
import { RootStackParamList } from '../types/navigation';
import React from 'react';




export default function LoginScreen( { navigation }: any ) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        setError('');
        if (!email || !password) {
            setError('Please enter both email and password');
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('User logged in successfully:', user);
            // alert('Login successful!');
            navigation.navigate('Home');
            setEmail('');
            setPassword('');
            setError(''); // Clear any previous errors
        } catch (error: any) {
            // console.error('Login error:', error.code, error.message);

            const errorMessages: Record<string, string> = {
                'auth/user-not-found': 'User not found. Please register first.',
                'auth/wrong-password': 'Incorrect password. Please try again.',
                'auth/invalid-credential': 'Invalid email or password. Please try again.',
                'auth/invalid-email': 'Invalid email address.',
                'auth/too-many-requests': 'Too many failed attempts. Please try again later.',
                'auth/user-disabled': 'This account has been disabled.',
            };

            setError(errorMessages[error.code] || `Login failed: ${error.message}`);
        }
    };

   const gotoRegister = () => {
    navigation.navigate('Register');
   }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
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
            <View style={styles.buttonContainer}>
                <Button title="Login" onPress={handleLogin} />
            </View>
            <Text style={{ color: 'red' }}>{error}</Text>


            <TouchableOpacity onPress={gotoRegister}>
                <Text style={styles.registerText}>Don't have an account? Register here</Text>
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
    buttonContainer: {
        width: '100%',
        marginTop: 10,
        marginBottom: 20,
    },
    registerText: {
        color: '#007AFF',
        fontSize: 14,
        marginTop: 10,
    },
});
