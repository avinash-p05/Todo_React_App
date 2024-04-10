import { useEffect, useState } from "react"
import { retrieveAllTodosForUsername } from "./api/TodoApiService"


export default function ListTodosComponent(){
    const today = new Date()
    const targetDate = new Date(today.getFullYear()+12,today.getMonth(),today.getDay())
    const[todos,setTodos] = useState([])

//     const todos =[
//         // {id:1,description:"Learn Spring boot",done:false,targetDate:targetDate},
//         // {id:2,description:"Learn DSA",done:false,targetDate:targetDate},
//         // {id:3,description:"Learn Docker",done:false,targetDate:targetDate},
// ]

    useEffect (
        () =>
            refreshTodos()
    )

    function refreshTodos(){
        retrieveAllTodosForUsername('Avinash')
            .then(response => {
                setTodos(response.data)
                console.log(response.data)
                }
            )
            .catch(error => console.log(error))
    }



    return(
        <div className="container">
            <h1>Things you want to do!!</h1>
            <div>
                 <table className='table'>
                    <thead>
                        <tr>
                        <td>Id</td>
                        <td>Description</td>
                        <td>Is Done?</td>
                        <td>Target Date</td>
                        </tr> 
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toDateString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                 </table>
            </div>
        </div>
    )
}

