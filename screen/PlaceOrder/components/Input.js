import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default Input = ({data, handleChange, placeholder}) => {
  return (
    <View style={{marginBottom: 10}}>
      <TextInput
        style={styles.inputBox}
        placeholder={placeholder}
        value={data}
        onChangeText={text => handleChange(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  inputBox: {
    // color:'#d3d3d3'
    backgroundColor: '#d3d3d3',
    paddingLeft: 10,
    color: '#413939',
  },
});
