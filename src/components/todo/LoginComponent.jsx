import { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'
export default function LoginComponent(){

    const [username,setUsername] = useState('Avinash')
    const [password,setPassword] = useState('')
    const [showErrorMessage,setShowErrorMessage] = useState(false)
    const navigate = useNavigate()
    const authContext = useAuth()



    function handleUsernameChange(event){
        setUsername(event.target.value)
    }

    function handlePasswordChange(event){
        setPassword(event.target.value)
    }

    async function handleSubmit(){
        if(await authContext.login(username,password)){
            navigate(`/welcome/${username}`)

        }
        else{
            setShowErrorMessage(true)
        }
    }

    return(
        <div className="Login">
            
            <div className="LoginForm">
                <h1>Login to your Account</h1>
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
            </div>
            <div>
                <button type="button" name="login" onClick={handleSubmit}>Login</button>
            </div>
            {showErrorMessage && <div className="errorMessage">Authenticated Failed !! Please check your credentials.</div>}
        </div>
    )
}