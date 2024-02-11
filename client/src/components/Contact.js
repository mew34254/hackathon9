import './Contact.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Contact(props) {


    return (
        <>
        <NavBar />

<div className = "contactHeader">
        <h1>Meet the Team</h1>
</div>
<div className = "contactGrid">
        <div className = "Kimmi">
            <div className = "contactItem">
                <a href = "https://www.linkedin.com/in/kimmi-dulaney-1379711b1/" target = "_blank">
                    <img src = "images/Kimmi.jpg" alt = "kimmiPhoto" />
                </a>
                    <h2> Kimmi Dulaney </h2>
                    <p>Cognitive Science</p>
            </div>
        </div>

        <div className = "Hannah">
            <div className = "contactItem">
                <a href = "www.linkedin.com/in/hannah-kelly-e93" target = "_blank">
                    <img src = "images/hannah.PNG" alt = "hannahPhoto" />
                </a>
                    <h2> Hannah Kelly </h2>
                    <p>Management Information Systems</p>
            </div>
        </div>

        <div className = "James">
            <div className = "contactItem">
                <a href = "https://www.linkedin.com/in/james-rivera-607872212/" target = "_blank">
                    <img src = "images/jamesheadshot.JPEG" alt = "jamesPhoto" />
                </a>
                    <h2> James Rivera </h2>
                    <p>Computer Science</p>
            </div>
        </div>

        <div className = "Matthew">
            <div className = "contactItem">
                <a href = "https://www.linkedin.com/in/matthew-weiss-0581a32b4/" target = "_blank">
                    <img src = "images/matthew.jpeg" alt = "matthewPhoto" />
                </a>
                    <h2> Matthew Weiss </h2>
                    <p>Computer Science</p>
            </div>
        </div>
</div>

<div className = "contactFooter">
<Footer />
</div>
        </>
    )
}

export default Contact;