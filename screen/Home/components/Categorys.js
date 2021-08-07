import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native'

export default function Categorys ({category}) {
    
    return(
        <View style={styles.container}>
            <View>
                {/* Header */}
                <Text style={{fontSize:18}}>Categories</Text>
            </View>
            <FlatList
                horizontal={true}
                data={category}
                renderItem = {({item})=>(
                    <TouchableOpacity style={styles.category}>
                          <Text>{item.name}</Text>
                     </TouchableOpacity>
                )}

            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
        marginLeft:10
        
    },
    category:{
        backgroundColor:'#d3d3d3',
        padding:10,
        borderRadius:30,marginRight:10
        
    }
})


// {/* <View style={{marginTop:10,flexDirection:'row'}} >
//                 {/* Categories */}
//                 <Category title="Fashion" />
//                 <Category title="Baby" />
//                 <Category title="Women" />
//                 <Category title="Mobile" />
//                 <Category title="Electronic" />              
//             </View> */}