export function getToken(key) {
    return localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA"))[key] : "";
}
export function hasAdministrativePrevilege(user){
    if(user.roles.indexOf("Admin")!=-1 || user.roles.indexOf("Owner")!=-1){
        return true;
    }
    return false;
}