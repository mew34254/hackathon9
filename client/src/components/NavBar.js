import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function NavBar(props) {
    const navigate = useNavigate();

    const goHome = () => {
        navigate('/');
        navigate(0);
    }

    const goAbout = () => {
        navigate('/about');
        navigate(0);
    }

    const goResources = () => {
        navigate('/resources');
        navigate(0);
    }

    const goTestimonials = () => {
        navigate('/testimonials');
        navigate(0);
    }

    const goContact = () => {
        navigate('/contact')
        navigate(0);
    }

    return (
        <>
            <nav className="NavBar-nav-bar">
                <div className="NavBar-logo">
                    <img src="images/logo.png" alt="logo" onClick={goHome()} />
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