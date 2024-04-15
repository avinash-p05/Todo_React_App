import { useNavigate, useParams} from 'react-router-dom'
import { createTodoApi, retrieveTodoApi, updateTodoApi } from './api/TodoApiService'
import { useAuth } from './security/AuthContext'
import { useEffect, useState } from 'react'
import { Formik,Form,Field, ErrorMessage} from 'formik'
import moment from 'moment'

export default function TodoComponent(){

    const [description,setDescription] = useState('')
    const [targetDate,setTargetDate] = useState('')

    const {id} = useParams()

    const authContext = useAuth()
    const navigate = useNavigate()

    const username = authContext.username

    useEffect(
        () => retrieveTodos(),
        [id]
    )

    function retrieveTodos(){
        if(id != -1){
            retrieveTodoApi(username,id)
            .then(response => {
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                })
            .catch(
                error => console.log(error)
            )
        }
    }

    function handleSubmit(values, actions) {
        // Handle form submission here
        const todo = {
            id:id,
            username:username,
            description:values.description,
            targetDate:values.targetDate,
            done:false
        }
        console.log(todo)
        
        if(id==-1){
            createTodoApi(username,todo)
            .then(response => {
                navigate('/todos')
                })
            .catch(
                error => console.log(error)
            )
        }
        else{
            updateTodoApi(username,id,todo)
            .then(response => {
                navigate('/todos')
                })
            .catch(
                error => console.log(error)
            )
        }

    }

    function validate(values) {
        let errors = {
            // description: 'Enter a valid description',
            // targetDate:'Enter a valid Target Date'
        }
        if(values.description.length<5)
            errors.description = 'Enter atleast 5 characters'
        if(values.targetDate == null  || values.targetDate == '')
            errors.description = 'Enter valid Target Date'
        console.log(values);
        return errors
    }


    return(
        <div className="container">
            <h1>Enter the todo Details</h1>
            <div>
                <Formik initialValues={{ description , targetDate}} enableReinitialize ={true} onSubmit={handleSubmit} validate={validate} validateOnBlur = {false} validateOnChange= {false} >
                    {
                        (props) => (
                            <Form className="form">
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className= "alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className= "alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field className="form-control" type="text" name="description"></Field>
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Target Date</label>
                                    <Field className="form-control" type="date" name="targetDate"></Field>
                                </fieldset>
                                <button type="submit" className="btn btn-success m-5" >Save</button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}