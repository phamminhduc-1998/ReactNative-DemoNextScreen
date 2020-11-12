import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({ navigation }) {

    return (
        <View style={styles.container}>
            {/*Khi click vao se chuyen sang man hinh ProfileScreen va truyen 2 bien name, old sang */}
            <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', { name: 'MinhDuc', old: '1998' })}>
                <Image style={{ width: 100, height: 100 }} source={{ uri: "https://www.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" }} ></Image>
            </TouchableOpacity>
            <Text>REACT NATIVE</Text>
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
