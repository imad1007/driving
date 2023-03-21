import React, { useState,useRef} from 'react'


export default function Profile() {
  const uploadRef = useRef(null);
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem('user'))[0]);
  const [full_name, setFull_name] = useState(profile.full_name);
  const [photo, setPhoto] = useState(profile.phone);
  const [phone, setPhone] = useState(profile.phone);
  const [email, setEmail] = useState(profile.email);


  const handlUpdate = () => {
    const formData = new FormData();
    formData.append('id_user', profile.id_user);
    formData.append('full_name', full_name);
    formData.append('phone', phone);
    formData.append('email', email);


    fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/updateuser', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(data => console.log(data))

  };
  const handlUploadFile = () => {
    uploadRef.current.click()
  }
  return (<>
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-1.jpg" />
            <div className="mt-5 text-center">
              <button style={{border:'none',padding:"5px",maxHeight:'40px' }} className="btn btn-primary" type="file" onClick={handlUploadFile}>
                <span>Ajouter photo</span><input hidden ref={uploadRef} onChange={e=>setPhoto(e.target.value)}  value={photo} type='file' />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Compte</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6"><label className="labels">Nom</label><input type="text" className="form-control" placeholder="Nom" onChange={e => setFull_name(e.target.value)} value={full_name} /></div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12"><label className="labels">Phone</label><input type="text" className="form-control" placeholder="phone" onChange={e => setPhone(e.target.value)} value={phone} /></div>
              <div className="col-md-12"><label className="labels">Email</label><input type="text" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} value={email} /></div>
            </div>
            <div className="mt-5 text-center"><button style={{backgroundColor:'#ffbb00',border:'none'}} className="btn btn-primary profile-button" type="button" onClick={handlUpdate}>Save Profile</button></div>
          </div>
        </div>
      </div>
    </div>

  </>)
}
