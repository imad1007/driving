import React,{useState} from 'react'
import { Navigate,Outlet } from 'react-router-dom'

function ProtectedRoutes() {
    const [isAutenticated,setIsAutenticated] = useState(localStorage.getItem('user'));
  return (
    isAutenticated.isLoged !== true?<Outlet/>:<Navigate to='/login'/>
  )
}

export default ProtectedRoutes