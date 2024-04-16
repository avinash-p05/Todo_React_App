import { useParams,Link} from 'react-router-dom'
import {retrieveHelloWorldPathVariable} from './api/HelloWorldApiService'
import { useState } from 'react'
import { useAuth } from './security/AuthContext'

export default function WelcomeComponent(){

    const authContext = useAuth()

    const { username } = useParams()
    console.log(username)

    const [message,setMessage] = useState(null) 


    function callHelloWorldRestApi(){
        
        retrieveHelloWorldPathVariable('Avinash',authContext.token)
            .then((response) => successfulResponse(response))
            .catch((error) => errorResponse(error))
            .finally(() => console.log('clean up'));

    }

    function successfulResponse(response){
        console.log(response)
        setMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }



    return(
        <div className="Welcome">
           <h1>Welcome {username}!</h1>
           <div>
            Your Todos - <Link to='/todos'>Go here</Link>
           </div>
           <div>
                <button className="btn btn-success m-5" onClick={ callHelloWorldRestApi}>Call Hello World</button>
           </div>
           <div className="text-info">
                {message}
           </div>
        </div>
    )
}