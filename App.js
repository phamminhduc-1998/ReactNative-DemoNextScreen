import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//đối tượng dùng để chứa các createStackNavigator
import { NavigationContainer } from '@react-navigation/native';
//đối tượng dùng để khai báo array các màn hình
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from "./Screen/ProfileScreen";
import Home from "./Screen/Home"

{/*
Nhap cau lenh 1 and 2 vao cmd
1: npm install @react-navigation/native @react-navigation/stack
2: expo install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
*/}

//createStackNavigator là đối tượng dùng để quản lý chuyển đổi màn hình cơ bản nhất trong gói Navigation
const Stack = createStackNavigator();

export default function App() {

  {/*
    Stack.Screen nao khai bao dau thi hien thi man hinh ay dau tien
    */}
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home" //tên của màn hình, giá trị này dùng để định danh cho màn hình đó
          component={Home} //tham chiếu tới file .js màn hình đó
          options={{ title: 'Welcome' }}//khai báo 1 số thông tin cho màn hình đó như tiêu đề, nút back, actionBar ….
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{ title: 'Screen' }}
        />
      </Stack.Navigator>
    </NavigationContainer>

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
