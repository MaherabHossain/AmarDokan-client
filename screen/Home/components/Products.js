import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet, SafeAreaView, FlatList,Image, ScrollView, TouchableOpacity } from 'react-native'
import { url } from '../../../server/api'
export default function Products ({product,addToCart,viewCart}) {
    
    return(
       <ScrollView  >
            <View style={styles.container}>
            <View>
                {/* Header */}
                <Text style={{fontSize:18}}>Products</Text>
            </View>
            <View style={{marginBottom:300,}} >
                {/* Product */}
                    <FlatList 
                        data={product}
                        numColumns={2}
                        renderItem={({item})=>(
                           <Product item={item} addToCart={addToCart} viewCart={viewCart} />
                        )}
                        listMode="SCROLLVIEW"                
                    />     
            </View>
        </View>
       </ScrollView>
    )
}

const Product = ({item,addToCart,viewCart}) =>{
    const [isCart,setCart] = useState(true);
    return(
        <View style={styles.product}>
            <Image source={{uri: `http://192.168.43.178:8000/image/${item.image_url1}`}}
              style={{width: 120, height: 120}} />
            <Text style={{marginTop:10,fontSize:17}}>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <TouchableOpacity style={styles.cartButton} onPress={()=>{isCart?addToCart(item,setCart):viewCart()}}>
                <Text>{isCart?'Add to Cart':'View Cart'}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginLeft:20,
        marginRight:30,
        marginTop:10,
        width:'100%',
    },
    product:{
        padding:10,
        backgroundColor:'#d3d3d3',
        margin:10,
        borderRadius:10
    },
    cartButton:{
        backgroundColor:'rgb(201, 218, 47)',
        padding:10,
        borderRadius:30,marginRight:10,
        alignItems:'center',
        marginTop:10
        
    }
})