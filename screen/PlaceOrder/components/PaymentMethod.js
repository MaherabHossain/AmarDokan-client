import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default PaymentMethod = ({name, isSelect, handleChange, payment,index}) => {
  const update = () => {
    var i = 1;
    const testObj = payment;
    for (let temp in testObj) {
      if(i==index){
        testObj[temp] = true;
      }else{
        testObj[temp] = false;
      }
      i++;
    }
    handleChange({...testObj,isSelect:name})
  };
  return (
    <View>
      <TouchableOpacity
        style={{
          backgroundColor: isSelect ? 'rgb(154, 167, 43)' : 'rgb(201, 218, 47)',
          alignItems: 'center',
          padding: 10,
          marginRight: 10,
          borderRadius:10
        }}
        onPress={() => update()}>
        <Text>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};