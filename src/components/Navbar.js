import React from 'react'
import './Navbar.css';
import Shopify from '../images/Shopify.png'

function Navbar() {
  return (
    <div className="menu">
      <img   className="icp"  src={Shopify} alt="Icon" />
      <ul className="menuitems">
       <li>Start</li>
       <li>Sell</li>
      <li>Market</li>
      <li>Manage</li>
       </ul>
        <ul className='menu2'>
          <li >Pricing</li>
          <li >Learn</li>
          <li >Log in</li>
         
          
      </ul>
      <button  type="button">Try for Free</button>
    </div>
  )
}

export default Navbar
