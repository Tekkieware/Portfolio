import React from 'react'
import logo from '../images/logo.png'
import {Image} from 'react-bootstrap'

function Loader() {
  return (
    <div className='loader-container'><div className="loader">
    <Image width={50} src={logo} />
  </div></div>
  )
}

export default Loader