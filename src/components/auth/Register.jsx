
import React, { useState, useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { showPassword } from '../custom';
import '../../style/aut.css';
import appleicone from '../../images/icon-apple.svg';
import SignupBackground from '../../images/SignupBackground.png'
import facebookicone from '../../images/icon-facebook.svg';
import googleicon from '../../images/icon-google.svg';
import twitericone from '../../images/icon-twitter.svg';

function Register() {
  const [file, setFile] = useState(null);
  const [Data, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    phone: '',
  });

  const navigate = useNavigate();
  useEffect(() => {
    showPassword();
  })
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('full_name', Data.full_name);
    formData.append('email', Data.email);
    formData.append('password', Data.password);
    formData.append('phone', Data.phone);
    console.log(formData)
    
  //   fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/register', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  //     navigate('/login')
  };

  return (
    <>
      <div className="content">
        <div className="site-wrap d-md-flex align-items-stretch">
          <div className="bg-img" style={{ backgroundImage: "url("+SignupBackground+")" }}></div>
          <div className="form-wrap">
            <div className="form-inner">
              <h1 className="title">Sign up</h1>
              <p className="caption mb-4">Create your account in seconds.</p>

              <form className="pt-3" onSubmit={handleSubmit}>

                <div className="form-floating">
                  <input type="text" className="form-control" id="name"  name="full_name" value={Data.full_name} onChange={handleInputChange} />
                  <label for="name">Full Name</label>
                </div>

                <div className="form-floating">
                  <input type="email" className="form-control" id="email"  name="email" value={Data.email} onChange={handleInputChange} />
                  <label for="email">Email Address</label>
                </div>

                <div className="form-floating">
                  <span className="password-show-toggle js-password-show-toggle"><span className="uil"></span></span>
                  <input type="password" className="form-control" id="password"  name="password" value={Data.password} onChange={handleInputChange} />
                  <label for="password">Password</label>
                </div>

                <div className="form-floating">
                  <input type="number" className="form-control" id="phone"  name="phone" value={Data.phone} onChange={handleInputChange} />
                  <label for="email">Phone Number</label>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="remember" />
                    <label for="remember" className="form-check-label">I agree to the <Link to="/">Terms of Service</Link> and <Link to="/">Privacy Policy</Link></label>
                  </div>
                </div>

                <div className="d-grid mb-4">
                  <button type="submit" className="btn btn-primary">Create an account</button>
                </div>

                <div className="mb-2">Already a member? <Link to="/login">Log in</Link></div>

                {/* <div className="social-account-wrap">
                  <h4 className="mb-4"><span>or continue with</span></h4>
                  <ul className="list-unstyled social-account d-flex justify-content-between">
                    <li><Link style={{ border: "1px solid #e6e5e5" }} to="/"><img src={googleicon} alt="Google logo" /></Link></li>
                    <li><Link style={{ border: "1px solid #e6e5e5" }} to="/"><img src={facebookicone} alt="Facebook logo" /></Link></li>
                    <li><Link style={{ border: "1px solid #e6e5e5" }} to="/"><img src={appleicone} alt="Apple logo" /></Link></li>
                    <li><Link style={{ border: "1px solid #e6e5e5" }} to="/"><img src={twitericone} alt="Twitter logo" /></Link></li>
                  </ul>
                </div> */}
              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
