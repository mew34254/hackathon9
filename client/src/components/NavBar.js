import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar(props) {


    return (
        <>
        <nav>
            <div>
                <img src = "images/logo.png" alt = "logo" />
            </div>

            <div>
                <ul>
                    <li>About Us</li>
                    <li>Resources</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;