
import React from 'react';
import Login from "./Screens/Login"
import { NativeBaseProvider, Box } from "native-base";
import SignIn from './Screens/SignIn';



function App(){

      return(
        <NativeBaseProvider>
        {/* <Login></Login> */}

        <SignIn></SignIn>
      </NativeBaseProvider>
        
      




      );
 


}


export default App;
