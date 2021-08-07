import React from 'react'
import {ScrollView, View} from 'react-native'
import Cart from './screen/cart'
import Home from './screen/Home'
import PlaceOrder from './screen/PlaceOrder'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
console.disableYellowBox = true
const Stack = createNativeStackNavigator();
export default function MyFunc () {
    return(
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerShown: false
              }}>
                  <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Home" component={Home} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}