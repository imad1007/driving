import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card,Button } from 'react-bootstrap';
import Loading from '../Loading'
import '../../style/homcontent.css'
import homeSrctionIcon from '../../images/home_section_icon.png';
import reservationIcon from '../../images/reservation_icone.png';
import murkIcon from '../../images/mark_icons.jpg';
import inscriptionIcon from '../../images/inscription_icon.jpg';
import pdfLearn_Icon from '../../images/pdfLearn_Icon.jpg';



export default function HomeContent() {
  const [loading, setLoading] = useState(true)
  const [displayContent, setDisplayContent] = useState('none')

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setDisplayContent(null)
      setLoading(false)
    }, 700);
  }, [])
  const cards = [
    {id:1,image:inscriptionIcon ,CardTitle:'Card Title',cardText:"Somequick exathebulk",cardButton:'somewhere'},
    {id:2,image:reservationIcon ,CardTitle:'Card Title',cardText:"Somequick exathebulk ",cardButton:'somewhere'},
    {id:3,image:pdfLearn_Icon,CardTitle:'Card Title',cardText:"Somequick exathebulk ",cardButton:'somewhere'},
    {id:4,image:murkIcon,CardTitle:'Card Title',cardText:"Somequick exathebulk",cardButton:'somewhere'}
  ]
  return (<>
    {
      loading === true ? <Loading /> : ''
    }
    <div className='home_content' style={{ display: displayContent }}>
      <div className="home_header">
        <h1 style={{ color: '#232551', margin: '20px' }}>Bonjour <span style={{ color: '#ffbb00', fontSize: '20px' }}>Imad</span></h1>
      </div>
      <div className="home_section">
        <div className="home_section_title" style={{ padding: '10px' }}>
          <div className="home_section_title_content">
            <h1>Get start Today</h1>
            <button >Get start</button>
          </div>
        </div>
        <div className="home_section_image">
          <img src={homeSrctionIcon} alt="autoIcole" />
        </div>
      </div>
      <div className="home_body_title">
        <h1 style={{ color: '#232551', margin: '20px' }}>Découvrez nos <span style={{ color: '#ffbb00' }}>services</span></h1>
      </div>
      <div style={
        {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'spaceEvenly',
          margin:'auto'
          

        }
        
      }>
        <Row>
          {cards.map((card)=>
          <Col key={card.id} xs={6.0} sm={6} md={6} lg={6}>
            <Card className="my-2" style={{ marginBottom:'1rem',backgroundColor:'#232551',padding:'6px',margin:'0px'}}>
              <Card.Img variant="top" src={card.image}  />
              <Card.Body>
                <Card.Title style={{color:"#ffbb00"}}> {card.CardTitle} </Card.Title>
                <Card.Text style={{color:"white",width:'100%'}}>
                  {card.cardText}
                </Card.Text>
                <Link><Card.Title style={{color:"#ffbb00"}}> {card.cardButton} </Card.Title></Link>
              </Card.Body>
            </Card>
          </Col>
          )}
        </Row>
      </div>
    </div>
  </>)
}
