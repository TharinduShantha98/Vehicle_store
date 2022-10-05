import { View, Text } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box, Input, Center,Button, StyleSheet,Icon,Image } from "native-base";
import car1 from  '../../VehicleStore/assets/images/car1.png'


export default function Home({navigation}) {



  return (
    <Box style={
        {
            flex: 1,
          // backgroundColor:"#000",
            flexDirection:'column',

        }
    }>

      
        <Box 
      
        style={{
            width:"100%",
            height:"100%",
           // backgroundColor:"#32a852",
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
           
        }}
        >

            <Box style={{
                width:"100%",
                height:"25%",
                backgroundColor:"#3051d9",
                borderBottomLeftRadius:30,
                borderBottomRightRadius: 30

                }}>
                <Center>
                    <Text style={{
                        fontSize:28,
                        fontWeight:"bold",}}>
                            Vehicle Store
                             </Text>
                             <Text style={{
                                fontSize:25,
                                fontWeight:"bold",}}>
                                Welcome!
                             </Text>

                             <Text>
                                Good morning mr Ajith
                             </Text>
                             <Input variant="rounded" placeholder="search Vehicle" />

                            


                </Center>
            </Box>


            <Box style={{
                width:"100%",
                height:"75%",
               // backgroundColor:"#000",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"column",


                
                }}>

                    <Box style={{
                        width:"100%",
                        height:"30%",
                    //    backgroundColor:"#000",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        flexDirection:"row",
                     

                
                    }}>

                    
                        <Box  style={{
                            width:"45%",
                            height:"90%",
                            backgroundColor:"#2e2c2c",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            borderTopLeftRadius:30,
                            borderBottomRightRadius: 30
                
                        }}>

                            <Button 
                        
                            onPress={() =>{navigation.navigate("AddVehicle")}}
                                                style={{
                                                    width:"90%",
                                                    height:"80%",
                                                    backgroundColor:"#2e2c2c",
                                                    fontWeight:"bold"

                     }}
                     >Add Vehicle</Button>

                        </Box>


                        <Box  style={{
                            width:"45%",
                            height:"90%",
                            backgroundColor:"#2e2c2c",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            borderTopLeftRadius:30,
                            borderBottomRightRadius: 30
                
                        }}>

                        <Button  style={{
                        width:"90%",
                        height:"70%",
                        backgroundColor:"#2e2c2c",
                        fontWeight:"bold"
                        
                            }} onPress={() => {navigation.navigate("VehicleList")}}>Vehicle List</Button>


                        </Box>
                        
                   

                    </Box>



                    <Box style={{
                        width:"100%",
                        height:"30%",
                    //    backgroundColor:"#000",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        flexDirection:"row",
                     

                
                    }}>

                    
                        <Box  style={{
                            width:"45%",
                            height:"90%",
                            backgroundColor:"#7630d9",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            borderTopLeftRadius:30,
                            borderBottomRightRadius: 30
                
                        }}>

                        </Box>


                        <Box  style={{
                            width:"45%",
                            height:"90%",
                            backgroundColor:"#d930d9",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            borderTopLeftRadius:30,
                            borderBottomRightRadius: 30
                
                        }}>

                        </Box>
                        
                   

                    </Box>


                    <Box style={{
                        width:"100%",
                        height:"30%",
                   //     backgroundColor:"#000",
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-around",
                        flexDirection:"row",
                     

                
                    }}>

                    
                        <Box  style={{
                            width:"45%",
                            height:"90%",
                            backgroundColor:"#7630d9",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            borderTopLeftRadius:30,
                            borderBottomRightRadius: 30
                
                        }}>

                        </Box>


                        <Box  style={{
                            width:"45%",
                            height:"90%",
                            backgroundColor:"#d930d9",
                            display:"flex",
                            alignItems:"center",
                            justifyContent:"center",
                            flexDirection:"row",
                            borderTopLeftRadius:30,
                            borderBottomRightRadius: 30
                
                        }}>

                        </Box>
                        
                   

                    </Box>


            </Box>


            {/* <Box  style={{
                width:"100%",
                height:"25%",
                backgroundColor:"#4287f5",
                display:'flex',
                alignItems:"center",
                justifyContent:"center",
                flexDirection:"row",

                
                }}>
                    <Box style={{
                        width:"50%",
                        height:"70%",
                     // backgroundColor:"#4287f5",
                        display:'flex',
                        alignItems:"center",
                        justifyContent:"center",
                        flexDirection:"row",
                }}>

                     <Button  onPress={() =>{navigation.navigate("AddVehicle")}}
                     style={{
                        width:"90%",
                        height:"70%",

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
                        height:"70%",
                        
                     }} onPress={() => {navigation.navigate("VehicleList")}}>Vehicle List</Button>

                    </Box>



            </Box> */}






           


        </Box>



    </Box>
  )
}


