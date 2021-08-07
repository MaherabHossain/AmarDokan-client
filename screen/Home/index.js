import React, {useState, useEffect} from 'react';
import {View, Text, Alert,ActivityIndicator} from 'react-native';
import Categorys from './components/Categorys';
import Header from '../shared/Header';
import Products from './components/Products';
import {url} from '../../server/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({navigation}) {
  const [category, setCategory] = useState();
  const [product, setProduct] = useState();
  const [loader,setLoader] = useState(true);
  useEffect(() => {
    fetchCategories();
    fetchProducts();
    setLoader(false)
  }, []);
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
    data.push({name:item.name,id:item.id,price:item.price,quantity:1,image_url1:item.image_url1});

    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem('cart', jsonValue);
    } catch (e) {
      console.log(e);
    }
    // try {
    //   var value = await AsyncStorage.getItem('cart');
    //   if (value !== null) {
    //     value = JSON.parse(value);
    //     value.map(item => {
    //       console.log(item.name);
    //       console.log(item.id);
    //       console.log(item.description);
    //       console.log(item.price);
    //       console.log('---');
    //     });
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    // //   console.log(data);
    // //   get cart data form async storage

    // console.log('===================================');
    setCart(false);
  };
  const viewCart = () => {
    navigation.navigate('Cart');
  };
  if(loader){
    return(
      <View style={{flex:1}}>
         <ActivityIndicator size="large" color="#00ff00" />
      </View>
    )
  }else{
    return (
      <View>
        <Header title="AmarDokan" />
        <Categorys category={category} />
        <Products product={product} addToCart={addToCart} viewCart={viewCart} />
      </View>
    );
  }
}
