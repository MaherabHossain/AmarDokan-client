import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';

export const url = 'http://192.168.43.178:8000/api';

export const Place_Order = async (data, navigation) => {
  var filteredData = [];
  const value = JSON.parse(await AsyncStorage.getItem('cart'));
  var total = 0;
  if (value != null) {
    value.map(item => {
      filteredData.push({
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        price: item.price,
        total_price: item.quantity * item.price,
      });
      total += item.quantity * item.price;
    });
  }
  const cartData = JSON.stringify(filteredData);
  const mainData = {
    cart: cartData,
    name: data.name,
    address: data.address,
    note: data.note,
    total,
    trxId: data.trxID,
    user_id: 1,
    phone_number: data.phone_number,
    number: data.phone_number,
  };
  fetch(`${url}/order`, {
    method: 'POST',
    body: JSON.stringify(mainData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => {
      console.log(json.code);
      if (json.code == 200) {
        AsyncStorage.removeItem('cart');
        Alert.alert('Order placed successfully');
        navigation.replace('Home');
      } else {
        Alert.alert('Something went wrong!');
      }
    });
};
