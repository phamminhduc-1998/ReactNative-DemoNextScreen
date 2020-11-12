import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';


export default function ProfileScreen({ route, navigation }) {
    {/**Nhan gia tri name, old cua man hinh Home truyen sang */ }
    const { name, old } = route.params;
    return (
        <View style={styles.container}>
            <Text>{name}</Text>
            <Text>{old}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
