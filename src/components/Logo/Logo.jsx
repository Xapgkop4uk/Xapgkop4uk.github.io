import React from 'react'
import logo from '../../images/logo.svg'

export default () => (
  <div className="logo-wrapper">
    <img src={logo || 'https://a.icons8.com/aUSOiWgn/glsHZG/logo.svg'} alt="logo" />
  </div>
)
