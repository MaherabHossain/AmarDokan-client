import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
export default function Header({title, icon, goBack}) {
  const showIcon = () => {
    return (
      <TouchableOpacity
        style={{marginLeft: 10, marginTop: 5}}
        onPress={() => goBack()}>
        <Icon name={icon} size={30} color="#900" />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 5,
        }}>
        <View style={{flexDirection: 'row'}}>
          {icon ? showIcon() : false}
          {/* Header title */}
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.profile}>{/* Profile image goes here*/}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: 'rgb(201, 218, 47)',
    height: 70,
    width: '100%',
  },
  title: {
    color: 'rgb(0, 0, 0)',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 3,
    marginLeft: 20,
  },
  profile: {
    height: 40,
    width: 40,
    backgroundColor: 'rgb(216, 66, 66)',
    borderRadius: 30,
    marginRight: '10%',
  },
});
