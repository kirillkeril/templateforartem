import axios from "axios";
import {getAuthToken} from "@/services/getAuthToken.ts";

export const httpClient = axios.create({
    baseURL: 'http://localhost:8000',
    withCredentials: true,
});

httpClient.interceptors.response.use((response) => {
    return response;
}, (config) => {
    const prevReq = config.response;
    if(prevReq.status === 401 && !prevReq._isRetry) {
        prevReq._isRetry = true;
        const token = getAuthToken();
        prevReq.headers.Authorization = `Bearer ${token}`;
        return prevReq;
    }
});
