
import { apiClient } from './ApiClient'
// export default function retrieveHelloWorldBean(){
//     return  axios.get('http://localhost:8080/hello-world-bean', { withCredentials: true })
// }
//Atlernative method



export const retrieveHelloWorldBean
        = () => apiClient.get('/hello-world-bean', { withCredentials: true })



export const retrieveHelloWorldPathVariable 
        = (username,token) =>  apiClient.get(`/hello-world/path-variable/${username}`)

export const executeBasicAuthenticationService 
        = (token) =>  apiClient.get(`/basicauth`, { headers:{
            Authorization : token
        } })