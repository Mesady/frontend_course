
import Axios from 'axios';
import { baseURL } from '../components/constants';



const checkPath = baseURL + '/auth/token/check/'

export async function checkToken(resultHandler: (data: boolean)=>void){
    Axios.post(checkPath, {
        token: localStorage.getItem('access')
      }).then(()=>{
        resultHandler(true)
      }).catch(()=>{
        Axios.post(checkPath, {
          token: localStorage.getItem('refresh')
        }).then(()=>{
            resultHandler(true)
        }).catch(()=>{
            resultHandler(false)
        })
      })
}