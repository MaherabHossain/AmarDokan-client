import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Alert, ActivityIndicator} from 'react-native';
import Categorys from './components/Categorys';
import Header from '../shared/Header';
import Products from './components/Products';
import {url} from '../../server/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
export default function Home({navigation}) {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState();
  const [loader, setLoader] = useState(true);
  const [key, setKey] = useState('0');
  let controller = new AbortController();

  // useFocusEffect(
  //    useCallback(() => {

  //     return () => {

  //     };
  //   }, [])
  // );
  useEffect(() => {
    fetchCategories();
    fetchProducts();
    setLoader(false);
  }, []);
  // const forceUpdate =()=>{
  //   setKey(Math.random)
  // }

  fetchCategories = async () => {
    const response = await fetch(`${url}/categories`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    const newData = await response.json();
    const data = [];

    newData.map(item => {
      data.push(item);
    });
    // console.log(data);
    setCategory(data);
  };
  fetchProducts = async () => {
    const response = await fetch(`${url}/products`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    });
    const newData = await response.json();
    const data = [];

    newData.map(item => {
      data.push(item);
    });
    setProduct(data);
  };
  const addToCart = async (item, setCart) => {
    // console.log(item);
    // await AsyncStorage.removeItem('cart');
    var data = [];
    try {
      var value = await AsyncStorage.getItem('cart');
      if (value !== null) {
        value = JSON.parse(value);
        data = value;
      }
    } catch (e) {
      console.log(e);
    }
    data.push({
      name: item.name,
      id: item.id,
      price: item.price,
      quantity: 1,
      image_url1: item.image_url1,
    });

    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('cart', jsonValue);
    } catch (e) {
      console.log(e);
    }
    setCart(false);
  };
  const viewCart = () => {
    navigation.replace('Cart');
  };

  if (loader) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  } else {
    return (
      <View>
        <Header title="AmarDokan" icon="" goBack="" />
        <Categorys category={category} />
        <Products product={product} addToCart={addToCart} viewCart={viewCart} />
      </View>
    );
  }
}
