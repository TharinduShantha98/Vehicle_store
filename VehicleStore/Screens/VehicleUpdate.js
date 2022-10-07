import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Box,Image,Center,Input, Button} from "native-base";
import { set } from 'react-native-reanimated';

export default function VehicleUpdate({route}) {

    const[id , setId] = useState('');
    const[vehicleNumber, setVehicleNumber] = useState('');
    const[vehicleType,setVehicleType] = useState('');
    const[venu, setVenue] = useState('');
    const[price, setPrice] = useState('');
    const[mileage, setmileage] = useState('');

    useEffect(()=>{

        setPrice(route.params.obj.price);
        setVehicleNumber(route.params.obj.vehicleNumber);
        setVehicleType(route.params.obj.vehicleType);
        setVenue(route.params.obj.venue);
        setmileage(route.params.obj.mileage);
        setId(route.params.obj.id);

    })


    const deleteData = (object_id)=>{

        fetch('http://192.168.8.101:3000/api/vehicle/vehicleId'+ object_id,{
          method:"DELETE",

        })

        .then((res)=>{
          console.log("delete success");
        })
        .catch((err)=>{
          console.log("not success delete ")
        })

    }



  return (

    <Box flex={"1"} style={{
        
  //      backgroundColor:"#000"

    }}>
      <Box style={{
          height:"10%",
      //    backgroundColor:"#364232",
          alignItems:"center",
          justifyContent:"center",

      }}>
        <Text>Vehicle Detail</Text>
        
      </Box>

      <Box style={{
          height:"80%",
      //    backgroundColor:"#323742",
          alignItems:"center",
          justifyContent:"center",
          
          

      }}>
        <Input size="xs" placeholder="vehicleNumber"   mt="2" w="80%" value={vehicleNumber} />
        <Input size="xs" placeholder="vehicleType"   mt="2" w="80%" value={vehicleType} />
        <Input size="xs" placeholder="venu"    mt="2" w="80%" value={venu}/>
        <Input size="xs" placeholder="price"   mt="2" w="80%" value={price} />
        <Input size="xs" placeholder="mileage"   mt="2" w="80%" value={mileage}/>

      </Box>

      <Box style={{
          height:"10%",
      //    backgroundColor:"#323742",
          alignItems:"center",
          justifyContent:"space-around",
          flexDirection:"row"
          
      }}>
          <Button
            style={{width:"30%"}}
            onPress={() => console.log("hello world")}>Update</Button>
          <Button  style={{width:"30%"}} onPress={() => deleteData(id)}>Delete</Button>

      </Box>

      
      


    </Box>
  )
}