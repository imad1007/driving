import React from 'react'
import {Link,Outlet,useNavigate} from 'react-router-dom'
import ABDELKARIM_logo from '../../images/ABDELKARIM_logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowAltCircleRight} from '@fortawesome/free-regular-svg-icons'

export default function Navbar() {
  const navigate = useNavigate()
  return (<>
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"white",color:"#232551"}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#" style={{color:"#232551"}}><img style={{width:"70%"}} src={ABDELKARIM_logo} /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="user" style={{color:"#232551"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="profile" style={{color:"#232551"}}>Compte</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="reservation" style={{color:"#232551"}}>Reservation</Link>
        </li>
      </ul>
      <div className="d-flex" style={{alignItems:'center'}}>
        <FontAwesomeIcon icon={faArrowAltCircleRight} style={{fontSize:'20px',margin:'7px'}} onClick={()=>{
          localStorage.setItem('isLogged',false)
          navigate('/login')
        }}/> <span style={{fontWeight:'600',cursor:'pointer'}}>Log out</span> 
      </div>
    </div>
  </div>
</nav>
<Outlet/>
</>)
}
