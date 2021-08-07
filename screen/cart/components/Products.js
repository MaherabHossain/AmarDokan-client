import React,{useState,useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Card from './Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cart from '..';

export default function Products() {
  const [product,setProduct] = useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData = async() =>{
    try {
    var value = await AsyncStorage.getItem('cart');
    if (value !== null) {
       value = JSON.parse(value);
       setProduct(value);
       console.log(value);
       console.log('test')
       console.log(value.length);
   
    }
  } catch (e) {
    console.log(e);
  }
  }

  const deleteProductFromCart = async (indexP) => {
      const data = product.filter((currentValue, index, arr)=> {
        console.log(index,indexP)
        return index!=indexP
      } )
      console.log('come')
      console.log(data);
      console.log(data.length)
      setProduct(data)
      jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('cart', jsonData);
      // console.log(indexP)
  }
  return (
    <ScrollView>
      <View style={style.container}>
      <View>
        {/* Header */}
        <Text style={{fontSize: 17}}>Shopping Cart</Text>
      </View>
      
      <View style={{marginTop: 10,marginBottom:10}}>
        {/* Products */}
        <FlatList 
          data={product}
          renderItem={({item,index})=>{
            
            return(
              <Card name={item.name} price={item.price} image={item.image_url1} quantity={item.quantity} index={index} deleteProductFromCart={deleteProductFromCart} />
            )
          }}
          keyExtractor={Math.random}
        />
        <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom:10
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
          }}>
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
