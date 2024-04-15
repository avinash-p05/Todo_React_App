import axios from 'axios'


const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)



export const retrieveAllTodosForUsernameApi
        = (username) =>  apiClient.get(`/users/${username}/todos`,{ withCredentials: true })

export const deleteTodoApi
        = (username,id) =>  apiClient.delete(`/users/${username}/todos/${id}`,{ withCredentials: true })

export const retrieveTodoApi
        = (username,id) =>  apiClient.get(`/users/${username}/todos/${id}`,{ withCredentials: true })

export const updateTodoApi
        = (username,id,todo) =>  apiClient.put(`/users/${username}/todos/${id}`,todo,{ withCredentials: true })

export const createTodoApi
        = (username,todo) =>  apiClient.post(`/users/${username}/todos`,todo,{ withCredentials: true })