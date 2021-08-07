import React, { useEffect } from 'react'
import { View , Text,TouchableOpacity} from 'react-native'
import Header from '../shared/Header'
import Products from './components/Products'

export default function Cart () {

    
    return(
        <View>
            <Header title="Cart" />
            <Products />       
        </View>
    )
}