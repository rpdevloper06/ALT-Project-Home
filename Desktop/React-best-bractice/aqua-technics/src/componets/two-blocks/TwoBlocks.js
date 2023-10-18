import React from 'react'
import './TwoBlocks.css'
import Office from '../img/home-page-alt-building.jpg';
import Graphene from '../img/home-page-graphene-23.jpg';
function TwoBlocks() {
    return (
        <div className='container_2_blocks'>
            <div className='left_col'><img src={Office} alt="ALT" />
                <h3>Fibreglass Swimming Pools Perth</h3>
                <p>Aqua Technics has been manufacturing award-winning fibreglass swimming pools for over 47 years. We have been a family owned and operated company since we first began. </p>
                <div className='line-button'><a href="#">Watch video</a></div>
            </div>
            <div className='right_col'><img src={Graphene} alt="Graphene Nano Tech" /></div>
        </div>
    )
}

export default TwoBlocks
