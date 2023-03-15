import React,{useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const [isAutenticated,setIsAutenticated] = useState(localStorage.getItem('isLogged'));
  return (
    isAutenticated === true?<Outlet/>:<Navigate to='/login'/>
  )
}

export default ProtectedRoutes