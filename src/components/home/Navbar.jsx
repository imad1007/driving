import React from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  return (<>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#7754F6",color:"white"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{color:"white"}}>Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Home" style={{color:"white"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="profile" style={{color:"white"}}>Profile</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:"white"}}>
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">Action</Link></li>
            <li><Link className="dropdown-item" to="#">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="reservation" style={{color:"white"}}>reservation</Link>
        </li>
      </ul>
      <div className="d-flex">
        <button className="btn btn-outline-light" onClick={()=>{
          localStorage.setItem('isLogged',false)
          navigate('/login')
        }}>Log out</button>
      </div>
    </div>
  </div>
</nav>
<Outlet/>
</>)
}
