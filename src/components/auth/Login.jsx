
import React, { useState , useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { showPassword } from '../custom';
import '../../style/aut.css';
import appleicone from '../../images/icon-apple.svg';
import facebookicone from '../../images/icon-facebook.svg';
import googleicon from '../../images/icon-google.svg';
import twitericone from '../../images/icon-twitter.svg';

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

    // const formData = new FormData();
    // formData.append('email',Data.email);
    // formData.append('password',Data.password);
    // console.log(formData)
    // fetch('http://localhost/react_server/api/Loginapi.php', {
    //   method: 'POST',
    //   body: formData,

    // })
    //   .then((response) => response.json())
    //   .then((data) => {if(data.statue="success"){setErrormessage((errmessage)=>({...errmessage,show:true,message:data.message}))}})
    //   .catch((error) => console.error(error));
    localStorage.setItem('isLogged',true)
    navigate('/home')
  };
  

  return (
    <>
    <div className="content">
    <div className="site-wrap d-md-flex align-items-stretch">
        <div className="bg-img" style={{backgroundColor:"rgb(139, 56, 248)"}}></div>
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
                        <input type="email" className="form-control" id="email" placeholder="info@example.com" name="email" value={Data.email} onChange={handleInputChange} />
                        <label for="email">Email Address</label>
                    </div>
                    
                    <div className="form-floating">
                        <span className="password-show-toggle js-password-show-toggle"><span className="uil"></span></span>
                        <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={Data.password} onChange={handleInputChange}/>
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

                    <div class="mb-2">Don’t have an account? <Link to="/register">Sign up</Link></div>

                    <div className="social-account-wrap">
                        <h4 className="mb-4"><span>or continue with</span></h4>
                        <ul className="list-unstyled social-account d-flex justify-content-between">
                            <li><Link style={{border:"1px solid #e6e5e5"}} to="/"><img src={googleicon} alt="Google logo"/></Link></li>
                            <li><Link style={{border:"1px solid #e6e5e5"}} to="/"><img src={facebookicone} alt="Facebook logo"/></Link></li>
                            <li><Link style={{border:"1px solid #e6e5e5"}} to="/"><img src={appleicone} alt="Apple logo"/></Link></li>
                            <li><Link style={{border:"1px solid #e6e5e5"}} to="/"><img src={twitericone} alt="Twitter logo"/></Link></li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</>
  );
}

export default Login;
