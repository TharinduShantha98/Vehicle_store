import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Input, Center,Button,Image } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



const options = {
         title: 'Select Image',
         type: 'library',
         options: {
                selectionLimit: 0,
                mediaType: 'photo',
                includeBase64: false,
         }
}



export default function AddVehicle() {

        const[image , setImage ] = new useState('https://wallpaperaccess.com/full/317501.jpg');




        const openGallary = async ()=>{
                const result = await launchImageLibrary(options);
                console.log(result);
                console.log(result.assets[0].uri);
                const  formData = new FormData()
                setImage(result.assets[0].uri);



        }




  return (
    <Box flex={"1"} style={
        {
          backgroundColor:"#3F535E",
          
        }
  } >

        <Box flex={"1"}  style={{backgroundColor:"#AE3636",}} >

                <Center flex={"1"} w="100%">

                        <Box flex={"2"}  style={{backgroundColor:"#1f79a3",}} w="100%" h="100%">
                                <Center>
                                <Image source={{
                                                uri:image 
                                                }} alt="Alternate Text" size="xl" maxWidth={"100%"}  maxHeight={"100%"}/>

                                </Center>
                              
                        </Box>


                        <Box flex={"1"}  style={{backgroundColor:"#36AE72", }}  w="80%">
                                <Center flex={"1"} >
                                <Button  onPress={() => openGallary()} style={{
                                        width:150,
                                        mt:5,
                                        fontWeight:"bold",}}>
                                                Upload image
                                                </Button>

                                </Center>
                              
                        </Box>

                </Center>

                

        </Box>


        <Box flex={"2"}  style={{backgroundColor:"#8d5cc4",}} >

        <Center  flex={"1"} w="100%">
                <Box   style={{backgroundColor:"#c4c45c", }} mt="3" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Number" />
                </Box>
                <Box   style={{backgroundColor:"#c4c45c",}}  mt="3" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Type" />
                 </Box>
                <Box   style={{backgroundColor:"#c4c45c",}}  mt="3" w="80%">
                    <Input variant="underlined" placeholder="Venue" />
                </Box>
                <Box   style={{backgroundColor:"#c4c45c",}}  mt="3" w="80%">
                    <Input variant="underlined" placeholder="Price" />
                </Box>
                <Box   style={{backgroundColor:"#c4c45c",}}  mt="3"  w="80%">
                    <Input variant="underlined" placeholder="Contact number" />
                </Box>


        </Center>

           
           

        </Box>









  </Box>
  )
}