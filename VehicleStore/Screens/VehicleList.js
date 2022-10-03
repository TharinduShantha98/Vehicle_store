import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView,  FlatList, StyleSheet,  StatusBar } from 'react-native';




 
  

export default function VehicleList() {

    const[posts, setpost ] = useState([]);

    useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setpost(json));
            
        }
    )






  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={posts}
      renderItem={({item}) =>

          <Text style={{marginBottom:"5%", padding:5, borderWidth:1}}>{item.title}</Text>
        

    

      }

    />
  </SafeAreaView>


    // <Text>Hello</Text>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });