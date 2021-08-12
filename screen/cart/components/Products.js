import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Alert,
} from 'react-native';
import Card from './Card';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Products({navigation}) {
  const [product, setProduct] = useState([]);
  const [key, setKey] = useState(0);
  useEffect(() => {
    fetchCartProduct();
  }, []);
  const fetchCartProduct = async () => {
    try {
      var value = await AsyncStorage.getItem('cart');
      if (value !== null) {
        value = JSON.parse(value);
        setProduct(value);
        console.log(value);
        console.log('test');
        console.log(value.length);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const deleteProductFromCart = async indexP => {
    const data = product.filter((currentValue, index, arr) => {
      console.log(index, indexP);
      return index != indexP;
    });
    console.log('come');
    console.log(data);
    console.log(data.length);
    setProduct(data);
    jsonData = JSON.stringify(data);
    await AsyncStorage.setItem('cart', jsonData);
  };
  const incrementQty = async index => {
    product[index].quantity = product[index].quantity + 1;
    const tempProduct = product;
    setProduct(tempProduct);
    console.log(product);
    const jsonValue = JSON.stringify(product);
    await AsyncStorage.setItem('cart', jsonValue);
    setKey(Math.random);
  };
  const decrimentQty = async index => {
    if (product[index].quantity == 1) {
      Alert.alert('you must be order at list item');
    }
    product[index].quantity = product[index].quantity - 1;
    const tempProduct = product;
    console.log(product);
    const jsonValue = JSON.stringify(product);
    await AsyncStorage.setItem('cart', jsonValue);
    setProduct(tempProduct);
    setKey(Math.random);
  };

  return (
    <ScrollView>
      <View style={style.container}>
        <View>
          {/* Header */}
          <Text style={{fontSize: 17}}>Shopping Cart</Text>
        </View>

        <View style={{marginTop: 10, marginBottom: 10}}>
          {/* Products */}
          <FlatList
            data={product}
            renderItem={({item, index}) => {
              return (
                <Card
                  name={item.name}
                  price={item.price}
                  image={item.image_url1}
                  quantity={item.quantity}
                  index={index}
                  deleteProductFromCart={deleteProductFromCart}
                  incrementQty={incrementQty}
                  decrimentQty={decrimentQty}
                />
              );
            }}
            keyExtractor={Math.random}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 10,
            }}>
            <View style={{marginLeft: '50%'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>Subtotal :</Text>
            </View>
            <View style={{marginRight: '17%'}}>
              <Text style={{fontSize: 17, fontWeight: 'bold'}}>2323</Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '50%',
          backgroundColor: 'rgb(201, 218, 47)',
          padding: 10,
          alignItems: 'center',
          left: '25%',
          marginBottom: 300,
        }}
        onPress={() => navigation.replace('PlaceOrder')}>
        <Text>Cheackout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});
