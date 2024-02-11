import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar(props) {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
    }

    const goAbout = () => {
        navigate('/about');
    }

    const goResources = () => {
        navigate('/resources');
    }

    const goTestimonials = () => {
        navigate('/testimonials');
    }

    const goContact = () => {
        navigate('/contact')
    }

    return (
        <>
            <nav className="NavBar-nav-bar">
                <div className="NavBar-logo">
                    <img src="images/logo.png" alt="logo" onClick={goHome} />
                </div>

                <div className="NavBar-nav-bar">
                    <ul className="NavBar-nav-bar">
                        <li onClick={goAbout}>About Us</li>
                        <li onClick={goResources}>Resources</li>
                        <li onClick={goTestimonials}>Testimonials</li>
                        <li onClick={goContact}>Contact</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar;