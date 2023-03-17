import React, { useState } from 'react'


export default function Profile() {

  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('user'))[0]);
  const [full_name, setFull_name] = useState(profile.full_name);
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);


  const handlUpdate = () => {
    const formData = new FormData();
    formData.append('id_user', profile.id_user);
    formData.append('full_name', full_name);
    formData.append('phone', phone);
    formData.append('email', email);
    

    fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/updateuser', {
    method:'POST',
    body:formData
    })
.then(response => response.json())
.then(data => console.log(data))
    
  };

  return (<>
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold">Edogaru</span><span className="text-black-50">edogaru@mail.com.my</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Compt</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6"><label className="labels">Nom</label><input type="text" className="form-control" placeholder="Nom" onChange={e => setFull_name(e.target.value)} value={full_name}  /></div>
              {/* <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname" /></div> */}
            </div>
            <div className="row mt-3">
              <div className="col-md-12"><label className="labels">Phone</label><input type="text" className="form-control" placeholder="phone" onChange={e => setPhone(e.target.value)} value={phone} /></div>
              <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} /></div>
              {/* <div className="col-md-12"><label className="labels">country</label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div> */}
              {/* <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
              <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
              <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value="" /></div>
              <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value="" /></div>
              <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="education" value="" /></div> */}
            </div>
            {/* <div className="row mt-3">
              <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value="" /></div>
              <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state" /></div>
            </div> */}
            <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={handlUpdate}>Save Profile</button></div>
          </div>
        </div>
        {/* <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span className="border px-3 p-1 add-experience"><i className="fa fa-plus"></i>&nbsp;Experience</span></div><br />
            <div className="col-md-12"><label className="labels">Experience in Designing</label><input type="text" className="form-control" placeholder="experience" value="" /></div> <br />
            <div className="col-md-12"><label className="labels">Additional Details</label><input type="text" classname="form-control" placeholder="additional details" value="" /></div>
          </div>
        </div> */}
      </div>
    </div>

  </>)
}
