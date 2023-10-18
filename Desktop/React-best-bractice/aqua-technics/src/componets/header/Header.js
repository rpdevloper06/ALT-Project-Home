import React from 'react'
import './Header.css';
import MainLogo from './Logo-wa';
import Navbar from './navigations-wa';
import QuickLinks from './quick-links';

function Header() {
    return (
        <div className='navbar'>
            <header className='header'>
                <div className="quick-link">
                    <QuickLinks/>
                </div>
                <ul>
                    <li className='title'><MainLogo /></li>
                    <div className='lists'>
                        <Navbar />
                    </div>

                </ul>

            </header>
        </div>
    )
}

export default Header
