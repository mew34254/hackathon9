import './AboutUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AboutUs(props) {


    return (
        <>
        <NavBar />
        <section class = "section1"> 
        <div className = "initialInterface" >
            <div className = "textContainer" >
                <div className = "welcomeText" >
                    <h1>About <br></br> Us</h1>
                    <p>This is filler text.</p>
                </div>
            </div>
                    <img src = "images/columbiaBlue.png" alt = "About Us Image" />
        </div>
        </section>

        <section class = "body"> 
            <div className = "AboutUs-body" >
               <h1>Who are we?</h1>
               <p>This is filler text.</p>
               <h1>What are financial scams?</h1>
               <p>This is filler text.</p>
               <h1>How do we solve it?</h1>
               <p>This is filler text.</p>
            </div>
                    <div className = "AboutUs-bodyImages" >
                         <img src = "" alt = "" />
                    </div>
        </section>
        
        </>
    )
}

export default AboutUs;