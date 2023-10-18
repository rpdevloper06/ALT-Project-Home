import React from 'react'
import './ThreeBlocks.css';
import FeaturedPool from '../img/feature-pool-abp_saint-remy.png';
function ThreeBlocks() {
  return (
    <div className='container_3_blocks'>
      <div className='col_1'><img src={FeaturedPool} alt="ALT" />

        <p>Aqua Technics has been manufacturing award-winning fibreglass swimming pools for over 47 years. We have been a family owned and operated company since we first began. </p>
        <div className='line-button read_bt'><a href="#">Read more</a></div>
      </div>
      <div className='col_2'><h3>Pool Planner</h3><p>Aqua Technics has been manufacturing award-winning fibreglass swimming pools for over 47 years. We have been a family owned and operated company since we first began. </p>
        <div className='line-button read_bt'><a href="#">Read more</a></div></div>
      <div className='col_3'><img src={FeaturedPool} alt="ALT" />

        <p>Aqua Technics has been manufacturing award-winning fibreglass swimming pools for over 47 years. We have been a family owned and operated company since we first began. </p>
        <div className='line-button read_bt'><a href="#">Read more</a></div></div>
    </div>


  )
}

export default ThreeBlocks
