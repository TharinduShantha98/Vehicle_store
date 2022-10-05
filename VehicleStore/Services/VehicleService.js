import { Axios } from "react-native-axios";


class VehicleService {

    vehicleSave =  (data) =>{

        const promise = new Promise((resolve, reject) =>{

            Axios({
                method: 'post',
                url: 'http://localhost:3000/api/vehicle',
                data: data,
                Headers:{
                    'content-type':'multipart/form-data' ,

                }


            })

        })


    }






}
