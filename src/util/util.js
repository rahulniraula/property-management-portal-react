import {siteConfig} from "../config/config";
import jwt_decode from "jwt-decode";

export function getToken(key) {
    return localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA"))[key] : "";
}
export function hasAdministrativePrevilege(user){
    if(user?.roles?.includes("ADMIN") || user?.roles?.includes("OWNER")){
        return 1;
    }else{
        return 0;
    }
}
export function isLoggedIn(){
    return getToken(siteConfig.accessTokenKey);
}
export function logout(){
    return localStorage.clear();
}
export function catchErrorsFromResponse(error){
    let errors=error?.response?.data?.errors;
    return errors.map(error=>error.defaultMessage);
}
export default function extractUserFromToken(){
    let token=getToken("accessToken");
    if(token){
        return decodeJwt(token)?.user;
    }
    return null;
}
function decodeJwt(key){
    return jwt_decode(key)
}