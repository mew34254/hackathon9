import './Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Contact(props) {


    return (
        <>
        <NavBar />

        <div className = "profile1">
            <div className = "Kimmi">
                <img src = "images/Kimmi.jpg" alt = "kimmiPhoto" />
            </div>
        </div>

        <div className = "profile2">
            <div className = "Hannah">
                <img src = "images/hannah.PNG" alt = "hannahPhoto" />
            </div>
        </div>

        <div className = "profile3">
            <div className = "James">
                <img src = "images/Kimmi.jpg" alt = "jamesPhoto" />
            </div>
        </div>

        <div className = "profile4">
            <div className = "Matthew">
                <img src = "images/Kimmi.jpg" alt = "matthewPhoto" />
            </div>
        </div>

        </>
    )
}

export default Contact;