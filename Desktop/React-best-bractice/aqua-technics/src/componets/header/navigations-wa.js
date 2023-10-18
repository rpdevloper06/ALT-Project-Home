import React from 'react'
import './navigations-wa.css';

function navigations() {
    return (
        <ul class="navbar-links">
            <li>Home</li>
            <li class="navbar-dropdown">
                <a href="#">Pools</a>
                <div class="dropdown">
                    <h3>Our pool range</h3>
                    <a href="#">Small Pools</a>
                    <a href="#">Medium Pools</a>
                    <a href="#">Large Pools</a>
                    <a href="#">Aqua Ledge</a>
                    <a href="#">Spillway Spas</a>
                    <a href="#">View All</a>
                </div>
            </li>
            <li class="navbar-dropdown">
                <a href="#">Colours</a>

                <div class="dropdown">
                    <h3>Our colour range</h3>
                    <a href="#">View Colour Range</a>
                    <a href="#">Pool ColourGuard</a>

                </div>

            </li>
            <li class="navbar-dropdown">
                <a href="#">Quality</a>
                <div class="dropdown">
                    <h3>What we can offer!</h3>
                    <a href="#">The Aqua Technics Edge</a>
                    <a href="#">Graphene Nano - Tech</a>
                    <a href="#">Pools Built to Last</a>
                    <a href="#">Installation of Your Pool</a>
                    <a href="#">Research Before You Buy</a>
                    <a href="#">Pool ColourGuard</a>
                </div>
            </li>

            <li class="navbar-dropdown">
                <a href="#">About</a>
                <div class="dropdown">
                    <a href="#">The Aqua Technics Story</a>
                    <a href="#">Our Trophies</a>
                    <a href="#">Testimonials</a>
                    <a href="#">Videos</a>
                    <a href="#">Blog</a>
                    <a href="#">FAQ</a>
                </div>
            </li>

            <li class="navbar-dropdown">
                <a href="#">Locations</a>
                <div class="dropdown">
                    <h3>Find us</h3>
                    <a href="#">Perth Metro</a>
                    <a href="#">Country Agents</a>
                    <a href="#">National Agents</a>
                    <a href="#">International Agents</a>
                </div>
            </li>
            <li className='list quote'>Get a Quote</li>

        </ul>
    )
}

export default navigations;
