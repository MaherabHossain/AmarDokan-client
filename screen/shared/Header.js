import React from 'react'
import {Text,View,StyleSheet} from 'react-native'
export default function Header ({title}) {
    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <View>
                    {/* Header title */}
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.profile}>
                    {/* Profile image goes here*/}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'rgb(201, 218, 47)',
        height:70,
        width:'100%'
    },
    title:{
        color:'rgb(0, 0, 0)',
        fontSize:20,
        fontWeight:'bold',
        marginTop:3,
        marginLeft:40
    },
    profile:{
        height:40,
        width:40,
        backgroundColor:'rgb(216, 66, 66)',
        borderRadius:30,
        marginRight:'10%'
    }

})

