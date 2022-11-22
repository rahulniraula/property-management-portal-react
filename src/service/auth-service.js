import axios from "axios";
import {baseUrl} from "../config/config";

const AuthService={
    login({email,password,successCallback,errorCallback}){
        axios({
            url:baseUrl+"/authenticate/login",
            method:"POST",
            data:{email,password}
        }).then(resp=>{
            successCallback(resp.data);
        }).catch(e=>{
            // console.log(e);
            errorCallback(e);
        });
    }
}
export default AuthService