
import React, { useState , useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { showPassword } from '../custom';
import '../../style/aut.css';
import loginBackground from '../../images/LoginBckground.jpg';

function Login() {
    const [errormessage ,setErrormessage]=useState({show:false,message:""})
  const [Data, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  useEffect(()=>{
    showPassword();
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrormessage((errmessage)=>({...errmessage,show:false}))
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('email',Data.email);
    formData.append('password',Data.password);
    console.log(formData)
    fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/login', {
      method: 'POST',
      body: formData,

    })
      .then((response) => response.json())
      .then((data) => {if(data.statue!=="success"){setErrormessage((errmessage)=>({...errmessage,show:true,message:data.message}))}else{localStorage.setItem('isLogged',true);navigate('/home/user')}})
      .catch((error) => console.error(error));
    
  };

  

  return (
    <>
    <div className="content">
    <div className="site-wrap d-md-flex align-items-stretch">
      <h1>hemmoclea</h1>
        <div className="bg-img" style={{backgroundImage : "url("+loginBackground+")"}}></div>
        <div className="form-wrap">
            <div className="form-inner">
                <h1 className="title">Login</h1>
                <p className="caption mb-4">Please enter your login details to sign in.</p>
                {errormessage.show==true?
                        
                        <div class="d-grid mb-4">
                        <button style={{backgroundColor:"#ffe2e2",color:"red",border:"1px solid red",fontSize:"14px"}} class="btn btn-primary">{errormessage.message}</button>
                        </div>
                        :""}
                <form className="pt-3" onSubmit={handleSubmit}>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="email"  name="email" value={Data.email} onChange={handleInputChange} />
                        <label for="email">Email Address</label>
                    </div>
                    
                    <div className="form-floating">
                        <span className="password-show-toggle js-password-show-toggle"><span className="uil"></span></span>
                        <input type="password" className="form-control" id="password"  name="password" value={Data.password} onChange={handleInputChange}/>
                        <label for="password">Password</label>
                    </div>

                    <div class="d-flex justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="remember"/>
                            <label for="remember" class="form-check-label">Keep me logged in</label>
                        </div>
                        <div><a href="#">Forgot password?</a></div>
                    </div>
                    
                    <div class="d-grid mb-4">
                        <button type="submit" class="btn btn-primary">Log in</button>
                    </div>

                    <div class="mb-2" style={{marginBottom:"40px"}}>Don’t have an account? <Link to="/register">Sign up</Link></div>

                </form>
            </div>
        </div>
    </div>
</div>
</>
  );
}

export default Login;
