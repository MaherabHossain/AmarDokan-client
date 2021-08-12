import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Input from './Input';
import PaymentMethod from './PaymentMethod';
import {Place_Order} from '../../../server/api';

export default function Details({navigation}) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [phone_number, setPhoneNumber] = useState();
  const [payment, setPayment] = useState({
    bkash: false,
    roket: false,
    nogod: false,
    isSelect: false,
  });
  const [number, setNumber] = useState('');
  const [trxID, setTrxId] = useState('');
  const paymentInput = () => {
    const placeholder = `Enter ${payment.isSelect} number`;
    if (payment.isSelect) {
      return (
        <View>
          <KeyboardAvoidingView behavior="position" />
          <Input
            data={number}
            handleChange={setNumber}
            placeholder={placeholder}
          />
          <Input
            data={trxID}
            handleChange={setTrxId}
            placeholder="Enter transaction ID.."
          />
          <KeyboardAvoidingView />
        </View>
      );
    }
    return;
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{fontSize: 17}}>Billing Details</Text>
        <View style={{marginTop: 10}}>
          <Input data={name} handleChange={setName} placeholder="Enter name" />
          <Input
            data={address}
            handleChange={setAddress}
            placeholder="Enter Address"
          />
          <Input
            data={phone_number}
            handleChange={setPhoneNumber}
            placeholder="Enter phone number"
          />
          <TextInput
            style={{
              backgroundColor: '#d3d3d3',
              paddingLeft: 10,
              color: '#413939',
            }}
            multiline={true}
            numberOfLines={4}
            value={note}
            onChangeText={text => setNote(text)}
            placeholder="Note.."
          />
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
          <KeyboardAvoidingView behavior="position" style={{flex: 1}}>
            <View style={{marginTop: 10, marginBottom: 15}}>
              {/* Payment inputbox */}

              {paymentInput()}
            </View>
            {payment.isSelect ? (
              <TouchableOpacity
                style={{
                  width: '50%',
                  backgroundColor: 'rgb(201, 218, 47)',
                  padding: 10,
                  alignItems: 'center',
                  left: '25%',
                  borderRadius: 10,
                }}
                onPress={() =>
                  Place_Order(
                    {
                      name,
                      address,
                      note,
                      payment: payment.isSelect,
                      number: number,
                      trxID: trxID,
                      phone_number,
                    },
                    navigation,
                  )
                }>
                <Text>Place Order</Text>
              </TouchableOpacity>
            ) : (
              false
            )}
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
});
