import { View, Text,ImageBackground } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Center,Button,Icon,ScrollView } from "native-base";
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-google-signin/google-signin';



const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcoqfhuScVycNnXNN5_hY1R3WVp4K6LjyuDMyP2o1g8RBtqH8mLylHih9EzGstd0DFRw&usqp=CAU" };
export default function SignIn() {
  return (
    // <Box flex={"1"} style={
    //     {
    //       backgroundColor:"#3F535E",
          
    //     }
    //      } >


 <ScrollView  flex={1} w={"100%"} h="100%"  style={{
   //backgroundColor:"#3F535E"
   
   }}>

  <ImageBackground source={image} resizeMode="cover" >
    <Center flex={1} px="3" h="550" mt={"10%"}   style={
      { 
       // backgroundColor:"#3F535E"
      }
      
      }>
            <Box alignItems="center" mt="3">
            <Text style={
                {
                  fontSize:30,
                  fontWeight:"bold",
                  color:"white",
                }
              }>SignIn </Text>
            </Box>

            <Box alignItems="center" mt="3">
                    <Input mx="3" placeholder="User Name" w="100%" style={{color : "white"}} />
            </Box>
            <Box alignItems="center" mt="3">
                    <Input mx="3" placeholder="Email address" w="100%"  style={{color : "white"}}/>
            </Box>

            <Box alignItems="center" mt="3">
                    <Input mx="3" placeholder="Password" w="100%" />
            </Box>

            <Box alignItems="center" mt="3">
                    <Input mx="3" placeholder="Conform Password" w="100%" />
            </Box>

            <Box alignItems="center" mt="3"  w={"100%"}>
                <Button  onPress={() => console.log("hello world")} style={{
                    width:"100%",
                    fontWeight:"bold",
                
                }}>Login </Button>
            </Box>

            <Box alignItems="center" mt="3">
            <Text style={
                {
                  fontSize:10,
                  fontWeight:"bold",
                  color:"#000",
                }
              }>OR </Text>
            </Box>
            
            <Box alignItems="center" mt="3" w={"100%"}>
            <GoogleSigninButton
                style={{ width: "100%", height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                // onPress={this._signIn}
                // disabled={this.state.isSigninInProgress}
                />;
            </Box>

            


        </Center>


            </ImageBackground>
    </ScrollView>

       


        

       





    
    
    
    
    
    //  </Box>
  )
}