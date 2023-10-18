import React from 'react'
import './MainBanner.css';
import MainBanner from './img-main-banner/october-special-sep2023_desktop.png';
function Banner() {
  return (
    <div className='main-banner'>
      <img src={MainBanner} alt="Aqua Technics Fibreglass Swimming Pools" />
    </div>
  )
}

export default Banner

