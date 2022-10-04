
import React from 'react';
import Login from "./Screens/Login"
import { NativeBaseProvider, Box } from "native-base";
import SignIn from './Screens/SignIn';
import AddVehicle from './Screens/AddVehicle';
import VehicleList from './Screens/VehicleList';
import Home from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(){

  

      return(
      
       <NativeBaseProvider>
            <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="AddVehicle" component={AddVehicle} />
                        <Stack.Screen name="VehicleList" component={VehicleList} />
                    
                    </Stack.Navigator>
            </NavigationContainer>

      
    

        {/* <SignIn></SignIn> */}
        
        {/* <AddVehicle></AddVehicle> */}

      
        </NativeBaseProvider>

        
      




      );
 


}


export default App;
