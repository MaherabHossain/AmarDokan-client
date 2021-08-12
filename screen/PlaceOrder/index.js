import React from 'react';
import {View, Text} from 'react-native';
import Header from '../shared/Header';
import Details from './components/BillingDetails';
export default function PlaceOrder({navigation}) {
  const goBack = () => {
    navigation.replace('Cart');
  };
  return (
    <View>
      <Header title="Place Order" icon="arrow-back" goBack={goBack} />
      <Details navigation={navigation} />
    </View>
  );
}
