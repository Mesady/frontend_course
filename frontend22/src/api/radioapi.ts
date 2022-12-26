import axios, { AxiosRequestConfig } from 'axios';
import Axios, {AxiosError, AxiosResponse} from 'axios';
import { AuthContext } from '../components/AuthContext';
import { MyFormValues } from '../components/addRadio';
import { baseURL } from '../components/constants';
import RadioData from '../models/RadioData';
import { NavigateFunction } from 'react-router-dom';


const radioPath = 'http://127.0.0.1:8000/api/radio/'
const userradioPath = 'http://127.0.0.1:8000/api/radiouser/'

export async function getRadios(resultHandler: (data: any)=>void, tag: string){
    Axios.get(radioPath,
        {params:{tag: tag},responseType: "json" }
    ).then
    (result => {
        const data: RadioData[] = (result as AxiosResponse<RadioData[]>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}

export async function getRadiosUser(resultHandler: (data: any)=>void){
    Axios.get(userradioPath,
        {params:{user: parseJwt(localStorage.getItem('access')).user_id},responseType: "json" }
    ).then
    (result => {
        const data: RadioData[] = (result as AxiosResponse<RadioData[]>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        alert(error.message);
    });
}

function parseJwt (token: any) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}

export async function postRadio(resultHandler:(run: RadioData)=>void, data:MyFormValues,  
                                            auth_context:AuthContext | null, navigate:NavigateFunction){
    const radios = {
        radiourl: data.link,
        name: data.name,
        tag: data.tag,
        user: parseJwt(localStorage.getItem('access')).user_id,
    }

    const api = axios.create({baseURL: baseURL})
    api.interceptors.request.use((config: AxiosRequestConfig) => {
        config.headers = {'Authorization': 'Bearer ' + localStorage.getItem('access')};
        return config;
    })
    api.interceptors.response.use((config) =>{
        return config;
    }, async (error) =>{
        if(error.response.status === 401 && error.config && !error.config._isRetry){
            try {
                const response = await axios.post(
                    `${baseURL}/auth/token/refresh/`,
                    {refresh:localStorage.getItem('refresh')}
                )
                localStorage.setItem('access', response?.data.access)
                error.config.headers = {
                    'Content-Type': 'application/json',
                }
                error.config.data = JSON.parse(error.config.data);
                return api.request(error.config);
            }catch (e){
                console.log(e);
                auth_context?.setAuth(false);
                localStorage.clear();
                navigate('/login')
            }
        }
    })
    api.post<RadioData>(
        '/radiouser/', 
        radios, 
        {
            headers: {
                'Content-Type': 'application/json'
            },
        }  
    ).then
    (result => {
        const data: RadioData = (result as AxiosResponse<RadioData>).data;
        resultHandler(data);
    })
    .catch((error: AxiosError) => {
        console.log(error.message);
    });
}