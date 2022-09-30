import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Center,Button } from "native-base";
import { Flex, Spacer } from "native-base";






export default function Login() {
  return (
      
      <Box flex={"1"} style={
            {
              backgroundColor:"#3F535E",
              
            }
      } >
         <Center flex={1} px="3">

         <Box alignItems="center" mb="3">
          <Text style={
                {
                  fontSize:30,
                  fontWeight:"bold",
                  color:"#E7ECEE",
                }
              }>Login Page</Text>
         </Box>
           
            <Box alignItems="center">
                <Input mx="3" placeholder="User Name" w="100%" />
            </Box>;

            <Box alignItems="center">
                <Input mx="3" placeholder="Password" w="100%" />
            </Box>
            <Box alignItems="center" mt="3">
              <Button  onPress={() => console.log("hello world")} style={{
                width:150,
                fontWeight:"bold",
            
              }}>Login </Button>
            </Box>
         </Center>




       



      </Box>

      


   



   




  )
}





const styles = StyleSheet.create({

container:{
    backgroundColor:"#50af59",

   

}




})