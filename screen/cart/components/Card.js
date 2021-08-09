import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
export default function Card({
  name,
  price,
  image,
  quantity,
  index,
  deleteProductFromCart,
  incrementQty,
  decrimentQty,
}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            height: 50,
            width: 50,
            backgroundColor: '#fff',
            marginLeft: 10,
          }}>
          <Image
            source={{uri: `http://192.168.43.178:8000/image/${image}`}}
            style={{width: 50, height: 50}}
          />
        </View>
        <View style={{marginLeft: 10, width: '50%', flexDirection: 'row'}}>
          <View style={{width: '40%'}}>
            <Text style={{fontSize: 16}}>{name}</Text>
            <Text style={{fontSize: 12}}>Price: {price}</Text>
          </View>
          <View style={{marginLeft: 30}}>
            <Text style={{fontSize: 16}}>Qty</Text>
            <TouchableOpacity
              style={{
                marginRight: 15,
                backgroundColor: '#f3f3f3f3',
                paddingLeft: 5,
                paddingRight: 5,
              }}
              onPress={() => incrementQty(index)}>
              <Text style={{color: 'red'}}>+</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 12,
                textAlign: 'center',
                marginRight: 10,
                padding: 5,
              }}>
              {quantity}
            </Text>
            <TouchableOpacity
              style={{
                marginRight: 15,
                backgroundColor: '#f3f3f3f3',
                paddingLeft: 5,
                paddingRight: 5,
              }}
              onPress={() => decrimentQty(index)}>
              <Text style={{color: 'red'}}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{marginLeft: 10}}>
          <Text style={{fontSize: 16}}>Total</Text>
          <Text style={{fontSize: 12, textAlign: 'center'}}>{price}</Text>
        </View>
        <View>
          <TouchableOpacity
            style={{flex: 1, justifyContent: 'center'}}
            onPress={() => deleteProductFromCart(index)}>
            <Text style={{color: 'red', padding: 15}}>X</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginBottom: 20,
  },
});
