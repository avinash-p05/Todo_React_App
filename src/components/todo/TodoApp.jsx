import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import'./TodoApp.css'
import LogoutComponent from './LogoutComponent'
import LoginComponent from './LoginComponent'
import ListTodosComponent from './ListTodosComponent'
import WelcomeComponent from './WelcomeComponent'
import HeaderComponent from './HeaderComponent'
import ErrorComponent from './ErrorComponent'
import AuthProvider, { useAuth } from './security/AuthContext'


function AuthenticatedRoute({children}){
    const authContext = useAuth()
    if(authContext.isAuthenticated){
         return children
    }
    return <Navigate to="/"/>
}

export default function TodoApp(){
    return(
        <div className="TodoApp">
            <AuthProvider>
            <BrowserRouter>
            <HeaderComponent/>
                <Routes>
                <Route path='/' element={<LoginComponent/>}></Route>
                    <Route path='/login' element={<LoginComponent/>}></Route>
                    <Route path='/welcome/:username' element={
                        <AuthenticatedRoute>
                            <WelcomeComponent/>
                        </AuthenticatedRoute>} />
                    <Route path='*' element={<ErrorComponent/>}></Route>
                    <Route path='/todos' element={
                    <AuthenticatedRoute>
                        <ListTodosComponent/>
                    </AuthenticatedRoute>}  />
                    <Route path='/logout' element={
                    <AuthenticatedRoute>
                        <LogoutComponent/>
                    </AuthenticatedRoute>
                    }/>
                </Routes>
            </BrowserRouter>
            </AuthProvider>
        </div>
    )
}
