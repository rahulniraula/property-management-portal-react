export function getToken(key) {
    return localStorage.getItem("USER_DATA") ? JSON.parse(localStorage.getItem("USER_DATA"))[key] : "";
}