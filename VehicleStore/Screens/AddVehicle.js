import { View, Text,Alert } from 'react-native'
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

        const[image , setImage ] = new useState('https://cdn-icons-png.flaticon.com/512/2211/2211392.png');
        const[image1 , setImage1 ] = new useState('');
        const[vehicleNumber , setVehicleNumber ] = new useState('');
        const[vehicleType, setVehicleType] = new useState('');
        const[Venue, setVenue] = new useState('');
        const[price, setPrice] = new useState('');
        const[contact, setContactNumber] = useState('');
        const[mileage, setmileage] = new useState('');
        

        const addToData = ()=>{

                let formData = new FormData();
                formData.append('vehicleNumber',vehicleNumber);
                formData.append('vehicleType',vehicleType);
                formData.append('venue',Venue);
                formData.append('price',price);
                formData.append('mileage',mileage);
                formData.append('image',{
                        name:image1.type,
                        fileName: image1.fileName,
                        uri:image1.uri,

                })
        


                fetch('http://192.168.8.101:3000/api/vehicle',{
                        method:"POST",
                        body:formData,
                        headers:{
                                'content-type':'multipart/form-data' ,
                                
                        }

                })
                .then((response) =>{
                       console.log("successfully")
                    }).catch((err)=>{
                        console.log(err);
                        console.log("not successfully")
                    })
        
        
        
        
        
        
        }
      
        





        const openGallary = async ()=>{
                const result = await launchImageLibrary(options);
                console.log(result);
                //console.log(result.assets[0]);
                setImage(result.assets[0].uri);
                setImage1(result);
                

               
        
        }




  return (
    <ScrollView flex={"1"} style={
        {
         // backgroundColor:"#3F535E",
          
        }
  }>

        <Box  flex={"1"}    style={{}} >

                <Center flex={"3"} w="100%">

                        <Box flex={"2"}  w="100%" h="90%" >
                                <Center  flex={"2"}>
                                <Image source={{
                                                uri:image 
                                                }} alt="Alternate Text" size="xl"  width={"50%"}
                                               
                                                />



                                </Center>
                              
                        </Box>


                        <Box flex={"2"}  style={{ }}  w="80%" >
                                <Center flex={"1"} >
                                <Button  
                                         style={{
                                        width:150,
                                        mt:5,
                                        fontWeight:"bold",}}
                                        leftIcon = {<AddIcon  style={{color:"#bd8682", }}/> }
                                        size="sm"
                                        mt={3}
                                        onPress={(e) => {
                                                openGallary()
                                                
                                               
                                
                                        
                                        }}
                                        >
                                                Add Image

                                </Button>
                                </Center>
                              
                        </Box>

                </Center>

                

        </Box>


        <Box flex={"1"}  style={{}} >

        <Center  flex={"1"} w="100%">
                <Box   mt="2" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Number" color={"black"}
                        onChangeText={(e)=>{
                                console.log(e)
                                setVehicleNumber(e)
                        }}
                        />
                </Box>
                <Box     mt="2" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Type" 
                        onChangeText={(e)=>{
                                console.log(e)
                                setVehicleType(e)
                        }}

                        />
                 </Box>
                <Box     mt="2" w="80%">
                    <Input variant="underlined" placeholder="Venue" 
                        onChangeText={(e)=>{
                                console.log(e)
                                setVenue(e)
                        }}
                    
                    />
                </Box>
                <Box    mt="2" w="80%">
                    <Input variant="underlined" placeholder="Price" 
                      onChangeText={(e)=>{
                        console.log(e)
                        setPrice(e)
                    }}
                    />
                </Box>
                <Box    mt="2"  w="80%">
                    <Input variant="underlined" placeholder="Contact number"
                    onChangeText={(e)=>{
                        console.log(e)
                        setContactNumber(e)
                    }}
                    />
                </Box>

                <Box   mt="2"  w="80%">
                    <Input variant="underlined" placeholder="mileage" 
                     onChangeText={(e)=>{
                        console.log(e)
                        setmileage(e)

                    }}
                    
                    />
                </Box>
                

                <Box   mt="2"  w="80%">
                        <Button 
                        onPress={addToData}
                        
                        >
                                Save Vehicle
                                
                        </Button>
                </Box>
                    
                


        </Center>

           
           

        </Box>









  </ScrollView>
  )
}