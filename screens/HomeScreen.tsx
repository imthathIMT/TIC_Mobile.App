import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeText}>Welcome to the Home Screen!</Text>
                <Text style={styles.subtitle}>Explore our amazing products</Text>

                <TouchableOpacity
                    style={styles.productButton}
                    onPress={() => navigation.navigate('Product')}
                    activeOpacity={0.8}
                >
                    <Text style={styles.buttonText}>View Products</Text>
                    <Text style={styles.buttonIcon}>→</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    contentContainer: {
        alignItems: 'center',
        padding: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 8,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 40,
        textAlign: 'center',
    },
    productButton: {
        backgroundColor: '#6200EE',
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 30,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#6200EE',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        minWidth: 200,
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
        marginRight: 8,
    },
    buttonIcon: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});