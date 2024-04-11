import { useParams} from 'react-router-dom'
import { retrieveTodoApi } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'
import { useEffect, useState } from 'react'

export default function TodoComponent(){

    const [description,setDescription] = useState('')

    const {id} = useParams()

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        () => retrieveTodos(),
        [id]
    )

    function retrieveTodos(){
        retrieveTodoApi(username,id)
            .then(response => {
                    setDescription(response.data.description)
                })
            .catch(
                error => console.log(error)
            )
    }


    return(
        <div className="container">
            <h1>Enter the todo Details</h1>
            <div>
                description : {description}
            </div>
        </div>
    )
}