import axios from "axios";
import {baseUrl, siteConfig} from "./config";
import {getToken} from "../util/util";
axios.defaults.baseURL=baseUrl;
axios.defaults.headers.common['Authorization'] = getToken(siteConfig.accessTokenKey) ? `Bearer ${getToken(siteConfig.accessTokenKey)}` : ''
axios.defaults.headers.common['refreshToken'] = getToken(siteConfig.refreshTokenKey) ? `${getToken(siteConfig.refreshTokenKey)}` : ''
axios.defaults.headers.post['Content-Type'] = 'application/json';
// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default axios;