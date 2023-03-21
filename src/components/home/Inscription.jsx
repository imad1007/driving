import React, { useState, useRef } from 'react'



export default function Inscription() {

    //ref for click upload icon style
    const face1Ref = useRef(null);
    const face2Ref = useRef(null);
    const photoRef = useRef(null);
    //useState for state changes
    const [cartIdF1, setCartIdF1] = useState(null);
    const [cartIdF2, setCartIdF2] = useState(null);
    const [country, setCountry] = useState('');
    const [photo, setPhoto] = useState(null);



    const handlRegister = () => {
        const formData = new FormData();
        formData.append('face1', cartIdF1);
        formData.append('face2', cartIdF2);
        formData.append('country', country);
        formData.append('photo', photo);

        console.log(formData.get);
        // fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/updateuser', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => console.log(data))

    };


    return (<>
        <div className="container rounded bg-white mt-5 mb-5">
            <div className="row" >
                <div className="col-md-5 border-right" style={{ margin: 'auto' }}>
                    <div className="p-3 py-5">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <h4 className="text-right">Inscrez Vous</h4>
                        </div>
                        <div className="row mt-2">
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-12"><label className="labels">Photo</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button" style={{ backgroundColor: '#7754F6', border: 'none' }} onClick={() => { photoRef.current.click() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: 'white', width: "40px" }} fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <input disabled type="text" class="form-control" value={"Photo"} aria-label="" aria-describedby="basic-addon1" />
                                    <input hidden type="file" onChange={(e) => setPhoto(e.target.value)} value={photo} ref={photoRef} />
                                </div>
                            </div>
                            <div className="col-md-12"><label className="labels">Cart nationnal</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button" style={{ backgroundColor: '#7754F6', border: 'none' }} onClick={() => { face1Ref.current.click() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: 'white', width: "40px" }} fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <input disabled type="text" class="form-control" value={"Cart nation F1"} aria-label="" aria-describedby="basic-addon1" />
                                    <input hidden type="file" onChange={(e) => setCartIdF1(e.target.value)} value={cartIdF1} ref={face1Ref} />
                                </div>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button" style={{ backgroundColor: '#7754F6', border: 'none' }} onClick={() => { face2Ref.current.click() }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: 'white', width: "40px" }} fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z" />
                                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <input disabled type="text" class="form-control" value={"Cart nation F2"} aria-label="" aria-describedby="basic-addon1" />
                                    <input hidden type="file" onChange={(e) => setCartIdF2(e.target.value)} value={cartIdF2} ref={face2Ref} />
                                </div>
                            </div>
                            <div className="col-md-12"><label className="labels">Location</label>
                                <input value={country}  type="text" className="form-control"  onChange={(e) => setCountry(e.target.value)}  />
                            </div>
                        </div>
                        <div className="mt-5 text-center"><button style={{ backgroundColor: '#ffbb00', border: 'none' }} className="btn btn-primary profile-button" type="button" onClick={handlRegister}>Save Profile</button></div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
