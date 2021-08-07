import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Input from './Input';
import PaymentMethod from './PaymentMethod';
export default function Details() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [payment, setPayment] = useState({
    bkash: false,
    roket: false,
    nogod: false,
    isSelect: false,
  });
  const [paymentNumber,setPaymentNumber] = useState({
    number:'',
    trxID:'',
  })
  const paymentInput = () =>{
    const placeholder = `Enter ${payment.isSelect} number`
    if(payment.isSelect){
      return(
        <View>
          <Input data={paymentNumber.number} handleChange={setPaymentNumber} placeholder={placeholder}  />
          <Input data={paymentNumber.trxID} handleChange={setPaymentNumber} placeholder="Enter transaction ID.."  />
        </View>
      )
    }
    return 
  }
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 17}}>Billing Details</Text>
      <View style={{marginTop: 10}}>
        <Input data={name} handleChange={setName} placeholder="Enter name" />
        <Input data={email} handleChange={setEmail} placeholder="Enter email" />
        <Input
          data={address}
          handleChange={setAddress}
          placeholder="Enter Address"
        />
        <Input data={note} handleChange={setNote} placeholder="Note.." />
        <Text style={{fontSize: 16}}>Select payment method</Text>
        <View style={{marginTop: 10, flexDirection: 'row'}}>
          <PaymentMethod
            name="bKash"
            isSelect={payment.bkash}
            handleChange={setPayment}
            payment={payment}
            index={1}
          />
          <PaymentMethod
            name="Roket"
            isSelect={payment.roket}
            handleChange={setPayment}
            payment={payment}
            index={2}
          />
          <PaymentMethod
            name="Nogod"
            isSelect={payment.nogod}
            handleChange={setPayment}
            payment={payment}
            index={3}
          />
          
        </View>
       <View style={{marginTop:10}}>
         {/* Payment inputbox */}
         {paymentInput()}
       </View>
       {payment.isSelect?(
         <TouchableOpacity
         style={{
           width: '50%',
           backgroundColor: 'rgb(201, 218, 47)',
           padding: 10,
           alignItems: 'center',
           left: '25%',
           marginBottom: 300,
           borderRadius:10
         }}>
         <Text>Place Order</Text>
       </TouchableOpacity>
       ):false}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});
