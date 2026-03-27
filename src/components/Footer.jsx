import { faFacebookF, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faPhone, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'350px'}} className='bg-primary d-flex justify-content-center align-items-center flex-column text-light'>
      <div className="d-flex justify-content-evenly mb-5 w-100">
        <div style={{width:'400px'}}>
          <h3><FontAwesomeIcon icon={faTruckFast} /> E Cart</h3>
          <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
          <p>Code licensed Luminar, docs CC BY 3.0.</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className="d-flex flex-column">
          <h3>Links</h3>
          <Link to={'/'} className='text-light text-decoration-none'>Home</Link>
          <Link to={'/wishlist'} className='text-light text-decoration-none'>Wishlist</Link>
          <Link to={'/cart'} className='text-light text-decoration-none'>Cart</Link>
        </div>
        <div className="d-flex flex-column">
          <h3>Guides</h3>
          <a href={'https://react.dev/'} target='_blank' className='text-light text-decoration-none'>React</a>
          <a href={'https://redux.js.org/'}  target='_blank'  className='text-light text-decoration-none'>Redux</a>
          <a href={'https://reactrouter.com/'}  target='_blank'  className='text-light text-decoration-none'>React Router</a>
        </div>
        <div >
          <h3>Contact Us</h3>
          <div className="d-flex">
            <input type="text" placeholder='Email Here!!' className="form-control" />
            <button className="btn"> <FontAwesomeIcon icon={faArrowRight} className='text-light ms-1'/> </button>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-4">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faWhatsapp} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faEnvelope} />
            <FontAwesomeIcon icon={faPhone} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer