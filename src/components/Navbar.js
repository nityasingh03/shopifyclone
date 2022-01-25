import React from 'react'
import './Navbar.css';
import Icon from '../images/icon.png'

function Navbar() {
  return (
    <div className="menu">
      
      <ul className="menuitems">
        <li><img src={Icon} alt="Icon" /></li>
        <li><h1>shopify</h1></li>
        <li>Start</li>
        <li>Sell</li>
        <li>Market</li>
        <li>Manage</li>
          <li className="mu">Pricing</li>
          <li className="mu">Learn</li>
          <li className="mu">Log in</li>
          <li className="mu"><button  type="button">Try for Free</button></li>
          
      </ul>

    </div>
  )
}

export default Navbar
