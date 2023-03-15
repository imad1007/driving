import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck, faTrashAlt, faSquarePlus, faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import Loading from '../Loading'


export default function Historique_Reservation() {

    const [loading, setLoading] = useState(true)
    const [displayContent, setDisplayContent] = useState('none')
    const [myreservationdata, setMyreservationdata] = useState([])
    const [refresh, setRefresh] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setDisplayContent(null)
            setLoading(false)
        }, 700);
        fetchData();
    }, [refresh])

    const fetchData = async () => {
        const response = await fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/onlyuserreservation/1');
        const data = await response.json();
        setMyreservationdata(data);
      };



      const deleteReservation = async (Id) => {
        await fetch(`https://abdelkarimauto-ecole.000webhostapp.com/api/deletreservation/${Id}`, { method: 'DELETE' });
        setMyreservationdata(myreservationdata.filter((item) => item.id_reservation !== Id));
      };

    return (<>
        {
            loading === true ? <Loading /> : ''
        }
        <div className='reservation_history' style={{ height: '100vh', display: displayContent, transition: '700ms' }}>
            <div className="action" style={{ maxWidth: '600px', margin: 'auto', marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <FontAwesomeIcon icon={faArrowAltCircleLeft} style={{ fontSize: '35px', color: '#232551', padding: '10px', margin: '10px', backgroundColor: 'white', fontWeight: '600', cursor: 'pointer' }} onClick={() => navigate('/home/user')} />
                <FontAwesomeIcon icon={faSquarePlus} style={{ fontSize: '35px', color: '#232551', padding: '10px', margin: '10px', backgroundColor: 'white', fontWeight: '600', cursor: 'pointer' }} onClick={() => navigate('/home/reservation')} />
            </div>
            {
                myreservationdata.map((item, index) => (
                    <div key={index} className="reservation" style={{ maxWidth: '360px', margin: 'auto', marginTop: ' 20px', alignItems: 'center' }}>
                        <div className="reservation-date" style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'white', borderRadius: '7px', padding: '20px', border: '1px solid #e1e1e1' }}>
                            <div>
                                <FontAwesomeIcon icon={faCalendarCheck} style={{ color: '#00da7f', fontSize: '17px' }} />
                            </div>
                            <div className="date" style={{ fontSize: '17px', color: '#232551', fontWeight: 500 }}> {item.day} <span style={{ color: '#ffbb00', margin: "5px" }}>{new Date(item.date_pratique).getDate()}</span>{item.month} </div>
                            <div className="hour" style={{ fontSize: '17px', color: '#232551', fontWeight: 500 }}> {new Date(item.date_pratique).getHours() + ":00"} </div>
                            <div>
                                <button onClick={() => { deleteReservation(item.id_reservation) }} style={{ border: 'none', background: "none" }}><FontAwesomeIcon values='apple' icon={faTrashAlt} style={{ fontSize: '17px', cursor: 'pointer', color: 'red' }} /></button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>)
}
