import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/css/theme.css'
import LogoIcon from '../images/ABDELKARIM_logo.png'
import HeroIcon from '../assets/img/hero/hero-img.png'
import Icon1 from '../assets/img/category/icon1.png'
import Icon2 from '../assets/img/category/icon2.png'
import Icon3 from '../assets/img/category/icon3.png'
import Icon4 from '../assets/img/category/icon4.png'
import ValidationIcon from '../assets/img/validation/validation.png'
import ManagerIcon from '../assets/img/manager/manager.png'
import TickIcon from '../assets/img/manager/tick.png'
import MarketerIcon from '../assets/img/marketer/marketer.png'
import Marketing01 from '../assets/img/marketing/marketing01.png'
import Marketing02 from '../assets/img/marketing/marketing02.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-regular-svg-icons'
import Marketing03 from '../assets/img/marketing/marketing03.png'


export default function Index() {
  return (<>
    <main className="main index_content" id="top">
      <nav className="navbar navbar-expand-lg navbar-light sticky-top" data-navbar-on-scroll="data-navbar-on-scroll" style={{backgroundColor:'rgba(255, 255, 255, 1)'}}>
        <div className="container"><Link to='/' className="navbar-brand"><img src={LogoIcon}  alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
          <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#feature">Product</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#validation">Customers</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#superhero">Pricing</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="#marketing">Resources</a></li>
            </ul>
            <div className="d-flex ms-lg-4"><Link className="btn btn-secondary-outline" to="/login">Sign In</Link><Link className="btn btn-warning ms-3" to="/register">Sign Up</Link></div>
          </div>
        </div>
      </nav>
      <section className="pt-7">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-md-start text-center py-6">
              <h1 className="mb-4 fs-9 fw-bold">Apprenez à conduire de manière moderne et plus simple</h1>
              <p className="mb-6 lead text-secondary">Vous pouvez réserver des cours de conduite  <br className="d-none d-xl-block" />et vous inscrire uniquement<br className="d-none d-xl-block" />depuis votre domicile et via votre téléphone.</p>
              <div className="text-center text-md-start"><a className="btn btn-warning me-3 btn-lg" href="#!" role="button">Get started</a></div>
            </div>
            <div className="col-md-6 text-end"><img className="pt-7 pt-md-0 img-fluid" src={HeroIcon} alt="" /></div>
          </div>
        </div>
      </section>


      <section className="pt-5 pt-md-9 mb-6" id="feature">

        <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block" style={{backgroundImage:'url(../assets/img/category/shape.png)',opacity:'.5'}}>
        </div>
      

        <div className="container">
          <h1 className="fs-9 fw-bold mb-4 text-center"> We design tools to unveil <br className="d-none d-xl-block" />your superpowers</h1>
          <div className="row">
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={Icon1} width="75" alt="Feature" />
              <h4 className="mb-3">First click tests</h4>
              <p className="mb-0 fw-medium text-secondary">While most people enjoy casino gambling,</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={Icon2} width="75" alt="Feature" />
              <h4 className="mb-3">Design surveys</h4>
              <p className="mb-0 fw-medium text-secondary">Sports betting,lottery and bingo playing for the fun</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={Icon3} width="75" alt="Feature" />
              <h4 className="mb-3">Preference tests</h4>
              <p className="mb-0 fw-medium text-secondary">The Myspace page defines the individual.</p>
            </div>
            <div className="col-lg-3 col-sm-6 mb-2"> <img className="mb-3 ms-n3" src={Icon4} width="75" alt="Feature" />
              <h4 className="mb-3">Five second tests</h4>
              <p className="mb-0 fw-medium text-secondary">Personal choices and the overall personality of the person.</p>
            </div>
          </div>
          <div className="text-center"><a className="btn btn-warning" href="#!" role="button">SIGN UP NOW</a></div>
        </div>

      </section>






      <section className="pt-5" id="validation">

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-secondary">Effortless Validation for</h5>
              <h2 className="mb-2 fs-7 fw-bold">Design Professionals</h2>
              <p className="mb-4 fw-medium text-secondary">
                The Myspace page defines the individual,his or her
                characteristics, traits, personal choices and the overall<br />personality of the person.
              </p>
              <h4 className="fs-1 fw-bold">Accessory makers</h4>
              <p className="mb-4 fw-medium text-secondary">While most people enjoy casino gambling, sports betting,<br />lottery and bingo playing for the fun</p>
              <h4 className="fs-1 fw-bold">Alterationists</h4>
              <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you money,</p>
              <h4 className="fs-1 fw-bold">Custom Design designers</h4>
              <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you more money,</p>
            </div>
            <div className="col-lg-6"><img className="img-fluid" src={ValidationIcon} alt="" /></div>
          </div>
        </div>
      </section>






      <section className="pt-5" id="manager">

        <div className="container">
          <div className="row">
            <div className="col-lg-6"><img className="img-fluid" src={ManagerIcon} alt="" /></div>
            <div className="col-lg-6">
              <h5 className="text-secondary">Easier decision making for</h5>
              <p className="fs-7 fw-bold mb-2">Product Managers</p>
              <p className="mb-4 fw-medium text-secondary">
                The Myspace page defines the individual,his or her
                characteristics, traits, personal choices and the overall<br />personality of the person.
              </p>
              <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={TickIcon} width="35" alt="tick" />
                <p className="fw-medium mb-0 text-secondary">Never worry about overpaying for your<br />energy again.</p>
              </div>
              <div className="d-flex align-items-center mb-3"> <img className="me-sm-4 me-2" src={TickIcon} width="35" alt="tick" />
                <p className="fw-medium mb-0 text-secondary">We will only switch you to energy companies<br />that we trust and will treat you right</p>
              </div>
              <div className="d-flex align-items-center mb-3"><img className="me-sm-4 me-2" src={TickIcon} width="35" alt="tick" />
                <p className="fw-medium mb-0 text-secondary"> We track the markets daily and know where the<br />savings are.</p>
              </div>
            </div>
          </div>
        </div>

      </section>




      <section className="pt-5" id="marketer">

        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className="text-secondary">Optimisation for</h5>
              <p className="mb-2 fs-8 fw-bold">Marketers</p>
              <p className="mb-4 fw-medium text-secondary">Few would argue that, despite the advancements of<br />feminism over the past three decades, women still face a<br />double standard when it comes to their behavior.</p>
              <h4 className="fw-bold fs-1">Accessory makers</h4>
              <p className="mb-4 fw-medium text-secondary">While most people enjoy casino gambling, sports betting,<br />lottery and bingo playing for the fun</p>
              <h4 className="fw-bold fs-1">Alterationists</h4>
              <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you money,</p>
              <h4 className="fw-bold fs-1">Custom Design designers</h4>
              <p className="mb-4 fw-medium text-secondary">If you are looking for a new way to promote your business<br />that won't cost you more money,</p>
            </div>
            <div className="col-lg-6"><img className="img-fluid" src={MarketerIcon} alt="" /></div>
          </div>
        </div>

      </section>




      <section className="py-md-11 py-8" id="superhero">

        <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block background-position-top" style={{backgroundImage:'url(assets/img/superhero/oval.png)',opacity:'.5',backgroundPosition: 'top !important' }}>
        </div>
        

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 text-center">
              <h1 className="fw-bold mb-4 fs-7">Need a super hero?</h1>
              <p className="mb-5 text-info fw-medium">Do you require some help for your project: Conception workshop,<br />prototyping, marketing strategy, landing page, Ux/UI?</p>
              <button className="btn btn-warning btn-md">Contact our expert</button>
            </div>
          </div>
        </div>

      </section>

      <section className="pt-5" id="marketing">

        <div className="container">
          <h1 className="fw-bold fs-6 mb-3">Marketing Strategies</h1>
          <p className="mb-6 text-secondary">Join 40,000+ other marketers and get proven strategies on email marketing</p>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card"><img className="card-img-top" src={Marketing01} alt="" />
                <div className="card-body ps-0">
                  <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="#">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>
                  <h3 className="fw-bold">Increasing Prosperity With Positive Thinking</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card"><img className="card-img-top" src={Marketing02} alt="" />
                <div className="card-body ps-0">
                  <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="#">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>
                  <h3 className="fw-bold">Motivation Is The First Step To Success</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card"><img className="card-img-top" src={Marketing03} alt="" />
                <div className="card-body ps-0">
                  <p className="text-secondary">By <a className="fw-bold text-decoration-none me-1" href="#">Abdullah</a>|<span className="ms-1">03 March 2019</span></p>
                  <h3 className="fw-bold">Success Steps For Your Personal Or Business Life</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>





     
      <section className="pb-2 pb-lg-5">

        <div className="container">
          <div className="row border-top border-top-secondary pt-7">
            <div className="col-lg-3 col-md-6 mb-4 mb-md-6 mb-lg-0 mb-sm-2 order-1 order-md-1 order-lg-1"><img className="mb-4" src={LogoIcon} width="184" alt="" /></div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-3 order-md-3 order-lg-2">
              <p className="fs-2 mb-lg-4">Quick Links</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">About us</a></li>
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">Blog</a></li>
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">Contact</a></li>
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">FAQ</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0 order-4 order-md-4 order-lg-3">
              <p className="fs-2 mb-lg-4">Legal stuff</p>
              <ul className="list-unstyled mb-0">
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">Disclaimer</a></li>
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">Financing</a></li>
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">Privacy Policy</a></li>
                <li className="mb-1"><a className="link-900 text-secondary text-decoration-none" href="#!">Terms of Service</a></li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-6 mb-4 mb-lg-0 order-2 order-md-2 order-lg-4">
              <p className="fs-2 mb-lg-4">
                knowing you're always on the best energy deal.</p>
              <form className="mb-3">
                <input className="form-control" type="email" placeholder="Enter your phone Number" aria-label="phone" />
              </form>
              <button className="btn btn-warning fw-medium py-1">Sign up Now</button>
            </div>
          </div>
        </div>

      </section>






      <section className="text-center py-0">

        <div className="container">
          <div className="container border-top py-3">
            <div className="row justify-content-between">
              <div className="col-12 col-md-auto mb-1 mb-md-0">
                <p className="mb-0">&copy; 2023 Abdelkarim Inc </p>
              </div>
              <div className="col-12 col-md-auto">
                <p className="mb-0">
                  Made with<span className="fas fa-heart mx-1 text-danger"> </span>by <a className="text-decoration-none ms-1" href="https://themewagon.com/" target="_blank">ThemeWagon</a></p>
              </div>
            </div>
          </div>
        </div>

      </section>



    </main>



    <div className="modal fade" id="popupVideo" tabindex="-1" aria-labelledby="popupVideo" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <iframe className="rounded" style={{width:'100%',height:'500px'}} src="https://www.youtube.com/embed/_lhdhL4UDIo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </div>


 
    </>)
}
