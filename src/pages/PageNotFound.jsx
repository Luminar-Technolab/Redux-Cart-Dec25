import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div style={{height:'90vh'}} className='d-flex justify-content-center align-items-center flex-column'>
      <img className='w-25' src="https://www.innonet.nl/wp-content/uploads/2017/11/Page-not-found.png" alt="png" />
      <h1 className='mt-5'> WE ARE SORRY, LOOK LIKE YOUR LOST</h1>
      <Link to={'/'} className="btn btn-dark">Back To Home</Link>
    </div>

  )
}

export default PageNotFound