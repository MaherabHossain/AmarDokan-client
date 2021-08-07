import React from 'react'
import { View,Text } from 'react-native'
import Header from '../shared/Header'
import Details from './components/BillingDetails'
export default function PlaceOrder () {
    return(
        <View>
            <Header title="Place Order" />
            <Details />
        </View>
    )
}