import './AboutUs.css';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AboutUs(props) {


    return (
        <>
        <NavBar />
        <section class = "section1"> 
            <div className = "AboutUs-image" >
                <img src = "" alt = "" />
                
            </div>

        </section>

        <section class = "section2"> 
            <div className = "AboutUs-text" >
               <h1>About Us</h1>
               <h2>This is filler text.</h2>
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
        </>
    )
}

export default AboutUs;