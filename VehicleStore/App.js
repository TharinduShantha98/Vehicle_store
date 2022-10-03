
import React from 'react';
import Login from "./Screens/Login"
import { NativeBaseProvider, Box } from "native-base";
import SignIn from './Screens/SignIn';
import AddVehicle from './Screens/AddVehicle';
import VehicleList from './Screens/VehicleList';



function App(){

      return(
        <NativeBaseProvider>
        {/* <Login></Login> */}

        {/* <SignIn></SignIn> */}

        {/* <AddVehicle></AddVehicle> */}

        <VehicleList></VehicleList>

        </NativeBaseProvider>
        
      




      );
 


}


export default App;
