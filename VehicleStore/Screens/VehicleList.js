import { View, Text, TouchableOpacity  } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView,  FlatList, StyleSheet,  StatusBar, } from 'react-native';
import {Box,Image,Center} from "native-base";



 
  

export default function VehicleList({navigation}) {

    const[posts, setpost ] = useState([]);

    useEffect(()=>{
            fetch('http://192.168.8.101:3000/api/vehicle')
            .then((response) => response.json())
            .then((json) => {setpost(json.vehicles )
               console.log(json.vehicles);

            });
            console.log("heloooooo")
            

            
        },[])






  return (
    <SafeAreaView style={styles.container}>
    <FlatList
      data={posts}
      renderItem={({item}) =>


          <TouchableOpacity  style={{marginBottom:"5%", padding:5, borderWidth:1}} onPress={()=>{console.log("hello");}}>
            
            <Center>
              <Image source={
                    { 
                      uri:item.request.url
                    
                    }}alt="Alternate Text" size="xl"  width={"50%"}></Image>

                <Text>Vehicle Number: {item.vehicleNumber}</Text>
                <Text>Vehicle type : {item.vehicleType}</Text>
                <Text>Venu : {item.venue}</Text>
                <Text>Price : {item.price}</Text>
                <Text>Mileage : {item.mileage}</Text>

            </Center>
              
             

          </TouchableOpacity >
        

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