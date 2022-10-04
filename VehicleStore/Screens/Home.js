import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Center,Button, StyleSheet,Icon,Image } from "native-base";
import car1 from  '../../VehicleStore/assets/images/car1.png'


export default function Home({navigation}) {



  return (
    <Box style={
        {
            flex: 1,
          //  backgroundColor:"#000",
            flexDirection:'column',

        }
    }>

      
        <Box  style={{
            width:"100%",
            height:"100%",
         //   backgroundColor:"#32a852",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",


        
        }}
        >

            <Box style={{
                width:"100%",
                height:"10%",
                
                }}>
                <Center>
                    <Text style={{
                        fontSize:35,
                        fontWeight:"bold",


                    }}>Vehicle Store </Text>
                </Center>
            </Box>


            <Box style={{
                width:"100%",
                height:"50%",
              //  backgroundColor:"#000"
                
                }}>

                     <Center>
                <Image source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/7481/7481772.png"
                    }} alt="Alternate Text" style={{width:"70%", height:"100%"}} />

                </Center>;

            </Box>


            <Box  style={{
                width:"100%",
                height:"40%",
               // backgroundColor:"#000",
                display:'flex',
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"row",

                
                }}>
                    <Box style={{
                        width:"50%",
                        height:"70%",
                     //   backgroundColor:"#4287f5",
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"row",
                }}>

                     <Button  onPress={() =>{navigation.navigate("AddVehicle")}}
                     style={{
                        width:"90%",
                        height:"30%",

                     }}
                     >Add Vehicle</Button>

                    </Box>


                    <Box style={{
                        width:"50%",
                        height:"70%",
                     //   backgroundColor:"#4287f5",
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"row",

                
                }}>


                    <Button  style={{
                        width:"90%",
                        height:"30%",
                        
                     }} onPress={() => {navigation.navigate("VehicleList")}}>Vehicle List</Button>

                    </Box>



            </Box>






           


        </Box>



    </Box>
  )
}


