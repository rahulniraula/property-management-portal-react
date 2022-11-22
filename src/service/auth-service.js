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
    },
    register({firstName,lastName,email,phoneNumber,password,confirmPassword,role,successCallback,errorCallback}){
        axios({
            url:baseUrl+"/authenticate/register",
            method:"POST",
            data:{firstName,lastName,email,phoneNumber,password,role}
        }).then(resp=>{
            successCallback(resp.data);
        }).catch(e=>{
            errorCallback(e);
        });
    }
}
export default AuthService