import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Input, Center,Button,Image, AddIcon,ScrollView } from "native-base";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/AntDesign';





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

        const[image , setImage ] = new useState('https://www.slazzer.com/static/images/sample/png/demo-006.jpg');
        const[vehicleNumber , setVehicleNumber ] = new useState('');
        const[vehicleType, setVehicleType] = new useState('');
        const[Venue, setVenue] = new useState('');
        const[price, setPrice] = new useState('');
        const[mileage, setmileage] = new useState('');
        

      






        const openGallary = async ()=>{
                const result = await launchImageLibrary(options);
                console.log(result);
                console.log(result.assets[0].uri);
                const  formData = new FormData()
                setImage(result.assets[0].uri);



        }




  return (
    <ScrollView flex={"1"} style={
        {
          backgroundColor:"#3F535E",
          
        }
  } >

        <Box  flex={"1"}    style={{}} >

                <Center flex={"3"} w="100%">

                        <Box flex={"2"}  w="100%" h="100%" >
                                <Center  flex={"2"}>
                                <Image source={{
                                                uri:image 
                                                }} alt="Alternate Text" size="xl"  width={"50%"}
                                               
                                                />



                                </Center>
                              
                        </Box>


                        <Box flex={"2"}  style={{ }}  w="80%" >
                                <Center flex={"1"} >
                                <Button  onPress={() => openGallary()} style={{
                                        width:150,
                                        mt:5,
                                        fontWeight:"bold",}}
                                        leftIcon = {<AddIcon  style={{color:"#bd8682", }}/> }
                                        size="sm"
                                        mt={3}
                                        >
                                                Add Image

                                                </Button>

                                           

                                </Center>
                              
                        </Box>

                </Center>

                

        </Box>


        <Box flex={"1"}  style={{}} >

        <Center  flex={"1"} w="100%">
                <Box   mt="3" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Number" color={"black"} />
                </Box>
                <Box     mt="3" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Type" />
                 </Box>
                <Box     mt="3" w="80%">
                    <Input variant="underlined" placeholder="Venue" />
                </Box>
                <Box    mt="3" w="80%">
                    <Input variant="underlined" placeholder="Price" />
                </Box>
                <Box    mt="3"  w="80%">
                    <Input variant="underlined" placeholder="Contact number" />
                </Box>

                <Box   mt="3"  w="80%">
                    <Input variant="underlined" placeholder="mileage" />
                </Box>
                

                <Box   mt="3"  w="80%">
                        <Button onPress={() => console.log("hello world")}>Save Vehicle</Button>
                </Box>
                    
                


        </Center>

           
           

        </Box>









  </ScrollView>
  )
}