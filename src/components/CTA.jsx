import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <div className='cta'>
      <p className='cta-text'>Wanna Contact me? <br className='sm:block hidden'/>
      Here You can send a Mail to me</p>
      <Link to='/contact' className='btn'>Contact Me</Link>
    </div>
  )
}

export default CTA
