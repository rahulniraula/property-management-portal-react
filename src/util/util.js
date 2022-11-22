import {siteConfig} from "../config/config";

export function getToken(key) {
    return localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA"))[key] : "";
}
export function hasAdministrativePrevilege(user){
    if(user?.roles?.includes("Admin") || user?.roles?.includes("Owner")){
        return 1;
    }else{
        return 0;
    }


}
export function isLoggedIn(){
    return getToken(siteConfig.accessTokenKey);
}
export function catchErrorsFromResponse(error){
    let errors=error?.response?.data?.errors;
    return errors.map(error=>error.defaultMessage);

}