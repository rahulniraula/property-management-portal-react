import {siteConfig} from "../config/config";
import jwt_decode from "jwt-decode";

export function getToken(key) {
    return localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA"))[key] : "";
}
export function hasAdministrativePrevilege(){
    let user=extractUserFromToken();
    console.log(user);
    if(user?.roles?.find(role=>role.role==="ADMIN") || user?.roles?.find(role=>role.role==="OWNER")){
        return true;
    }else{
        return false;
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
export function userHasRole(role){
    let roles=extractUserFromToken()?.roles;
    return roles?.find(r=>r.role==role);
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
