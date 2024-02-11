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
            <div className = "AboutUs-image" >
                <img src = "images/columbiaBlue.png" alt = "About Us Image" />
            <div className = "AboutUs-text" >
               <h1>About <br></br> Us</h1>
            </div>
            <div className = "AboutUs-subtext" >
               <h2>This is filler text.</h2>
            </div>
            </div>
        </section>

        <section class = "body"> 
            <div className = "AboutUs-body" >
               <h1>Who are we?</h1>
               <h2>This is filler text.</h2>
               <h1>What are financial scams?</h1>
               <h2>This is filler text.</h2>
               <h1>How do we solve it?</h1>
               <h2>This is filler text.</h2>
            </div>

        </section>

        <section class = "bodyImages"> 
            <div className = "AboutUs-bodyImages" >
                <img src = "" alt = "" />
            </div>

        </section>
        <Footer />
        </>
    )
}

export default AboutUs;