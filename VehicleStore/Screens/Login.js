import { View, Text, StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Center,Button , Image} from "native-base";
import { Flex, Spacer } from "native-base";





const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEzxQm8fvkku2SVJs0po5ONlXhqXuROVEkkjMggA74ZN2yCmnxptDlvq7PusdHXw3-aA&usqp=CAU" };
export default function Login({navigation}) {
  return (
      
      <Box flex={"1"} style={
            {
             // backgroundColor:"#3F535E",
              
            }
      } >
          <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       

        <Box style={{
          height:"60%",
        //  backgroundColor:"#000",
          display:"flex",    

        }}>

         <Box  style={{
            height:"15%",
          //  backgroundColor:"#b5ab50",
            display:"flex",
            alignItems:"flex-end",
            justifyContent:"center",

            
        }}>
            <Button style={{
               width:"30%",
                border:"5px solid #000"

            }}variant="outline" colorScheme="secondary"  onPress={() =>{navigation.navigate("SignIn")}}>
                sign In 
            </Button>
         </Box>

         <Box style={{
            height:"85%",
          //  backgroundColor:"#ebeced",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            
        }}>
            {/* <Image source={{
                  uri: "https://cdni.autocarindia.com/ExtraImages/20200707011041_Mustang-1.jpg"
                }} alt="Alternate Text" style= {{
                    width:"80%",
                    height:"60%"


                }}/> */}
            <Text style={
                    {
                      fontSize:30,
                      fontWeight:"bold",
                      color:"#5b5c5e",
                     // backgroundColor:"#000",
                    }
                  }>Login Page</Text>
          

         </Box>


        </Box>



        <Box style={{
          height:"40%",

        }}>

            <Box alignItems="center" mb="3" >
               
            </Box>
              
                <Box alignItems="center">
                    <Input mx="3" placeholder="User Name" w="90%"  style={{color : "white",
                  fontWeight: "bold"}} />
                </Box>;

                <Box alignItems="center">
                    <Input mx="3" placeholder="Password" w="90%" style={{ fontWeight: "bold"}} />
                </Box>
                <Box alignItems="center" mt="3">
                  <Button 
                    onPress={() =>{navigation.navigate("Home")}}
                    style={{
                      width:150,
                      fontWeight:"bold",
                      backgroundColor:"#424345"

                  }}>Login </Button>
                </Box>



        </Box>

        
    
        </ImageBackground>


      </Box>

      


   



   




  )
}





const styles = StyleSheet.create({

container:{
    backgroundColor:"#50af59",

   

}




})