import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../shared/Header';
import Products from './components/Products';

export default function Cart({navigation}) {

    const goBack = () => {
        navigation.replace('Home');
    }
  return (
    <View>
      <Header title="Cart" icon="arrow-back" goBack={goBack} />
      <Products navigation={navigation} />
    </View>
  );
}
