import { createContext, useContext, useState } from "react";
import { executeJWTAuthenticationService } from "../api/AuthenticationApiService";
import { apiClient } from "../api/ApiClient";

export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export default function AuthProvider( { children } ){

    const [isAuthenticated , setAuthenticated] = useState(false)
    const [username,setUsername] = useState(null)
    const [token,setToken] = useState(null)


    // function login(username,password){
    //     if(username==='Avinash' && password==='123'){
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true

    //     }
    //     else{
    //         setAuthenticated(false)
    //         setUsername(null)
    //         return false
    //     }
    // }

    // async function login(username,password){

    //     const baToken = 'Basic '+ window.btoa(username+":"+password)

    //     try {
            
    //             const responseT = await executeBasicAuthenticationService(baToken)

    //             if(responseT.status===200){
    //                 setAuthenticated(true)
    //                 setUsername(username)
    //                 setToken(baToken)

    //                 apiClient.interceptors.request.use(
    //                     (config) => {
    //                         console.log("intercepting and adding a token")
    //                         config.headers.Authorization = baToken
    //                         return config
    //                     }
    //                 )

    //                 return true

    //             }
    //             else{
    //                 logout()
    //                 return false
    //     }
    //     } catch (error) {
    //         logout()
    //         return false
    //     }

    // }


    async function login(username,password){

                    try {
                        
                            const responseT = await executeJWTAuthenticationService(username,password)
                            console.log(responseT)
                            if(responseT.status===200){
                                const jwtToken = responseT.data.token
                                setAuthenticated(true)
                                setUsername(username)
                                setToken('Bearer '+ jwtToken)
            
                                apiClient.interceptors.request.use(
                                    (config) => {
                                        console.log("intercepting and adding a token")
                                        config.headers.Authorization = jwtToken
                                        return config
                                    }
                                )
            
                                return true
            
                            }
                            else{
                                logout()
                                return false
                            }
                    } catch (error) {
                        logout()
                        return false
                    }
        
    }


    function logout(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return(
        <AuthContext.Provider value={ {isAuthenticated,login,logout,username,token} }>
            {children}
        </AuthContext.Provider>
    )
}