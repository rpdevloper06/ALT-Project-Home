import React from 'react'
import Mail from '../img/mail.png';
import Wishlist from '../img/wishlist01.png';
import Phone from '../img/phone-icon-blue.png';
import Pin from '../img/pin-icon-blue.png';

function quickLinks() {
  return (
    <div>
      <ul>
        <li className='icons'><a href="http://localhost:3000/"><img src={Mail} alt='Email' /></a></li>
        <li className='icons'><a href="http://localhost:3000/"><img src={Wishlist} alt='Email' /></a></li>
        <li className='icons'><a href="http://localhost:3000/"><img src={Phone} alt='Email' /></a></li>
        <li className='icons'><a href="http://localhost:3000/"><img src={Pin} alt='Email' /></a></li>
      </ul>
    </div>
  )
}

export default quickLinks
