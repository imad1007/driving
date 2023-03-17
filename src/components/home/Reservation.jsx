import React, { useState, useEffect } from 'react'
import { Calendar } from 'react-calendar'
import '../../style/calendar.css';
import Loading from '../Loading';
import { useNavigate } from 'react-router-dom'


export default function Reservation() {
  const [calendar, setCalendar] = useState(new Date())
  const [houre, setHoure] = useState('')
  const [loading, setLoading] = useState(true)
  const [displayContent, setDisplayContent] = useState({ display: 'none' })
  const [houresReservere, setHouresReserver] = useState([]);
  const [cin, setCin] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/afficheReservation')
      .then(response => response.json())
      .then(data => setHouresReserver(data))
    setTimeout(() => {
      setDisplayContent({ display: null })
      setLoading(false)
    }, 700);
  }, [])


  // filtre les date que deja reserver
  const mouth = calendar.getDate();
  const houres = ["8:00", "9:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"]
  const houreIndate = houresReservere.filter((item) => (new Date(item.date_pratique).getDate() === mouth)).map((item) => (new Date(item.date_pratique).getHours() + ':00'))
  const evailabelHoures = houres.filter((item) => (item !== houreIndate.find((hour) => (hour === item))))

  //ajouter un neveuax revervation
  const handlclick = () => {
    const formData = new FormData();
    formData.append('cin', cin);
    formData.append('id_user', 1);
    formData.append('day', calendar.toLocaleDateString('en-US', { weekday: 'long' }));
    formData.append('month', calendar.toLocaleDateString('en-US', { month: 'long' }));
    formData.append('date_pratique', calendar.getFullYear() + '-' + (calendar.getMonth() + 1) + '-' + calendar.getDate() + " " + houre);

    fetch('https://abdelkarimauto-ecole.000webhostapp.com/api/createReservation', {
      method: 'POST',
      body: formData
    })
    

    // navigate('historique_Reservation')
  }

  return (<>
    {
      loading === true ? <Loading /> : ""
    }
    <div className="allContent" style={displayContent}>
      <h1 style={{textAlign:'center'}}>Choisissez le jour et l’heure</h1>
      <div className="content">
        <Calendar onChange={setCalendar} value={calendar} />
      </div>
      <div className="houres">
        {
          evailabelHoures.map((item, index) => (
            <button className='houre' key={index} value={item} onClick={(e) => (setHoure(e.target.value))}> {item} </button>
          ))
        }
      </div>
      <div className="form">
        <form className="pt-3 reservation_form" onSubmit={handlclick}>
          <div className="form-floating">
            <input type="text" className="form-control" value={cin} onChange={(e) => setCin(e.target.value)} id="cin" name="cin" />
            <label for="email">CIN</label>
          </div>
          <div class="d-grid mb-4">
            <button type="button" onClick={handlclick} style={{backgroundColor:"#ffbb00",color:'white'}} class="btn ">Reserver</button>
          </div>
        </form>
      </div>
    </div>

  </>)
}
