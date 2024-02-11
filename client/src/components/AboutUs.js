import './AboutUs.css';
import NavBar from './NavBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AboutUs(props) {


    return (
        <>
        <NavBar />
 
        <div className = "image" >
            <div className = "textContainerAboutUs" >
                <div className = "welcomeText" >
                    <h1>About <br></br> Us</h1>
                </div>
            </div>

            <div className = "textContainerSub" >
                        <div className = "subtext" >
                            <p>This is filler text.</p>
                        </div>
            </div>

            <div className = "bottomRightImage" >
                    <img src = "images/columbiaBlue.png" alt = "About Us Image" />
                    </div>
        </div>
   
        <div className = "textContainer2">
            <div className = "body" >
               <h1>Who are we?</h1>
               <p>This is filler text.</p>
               <h1>What are financial scams?</h1>
               <p>This is filler text.</p>
               <h1>How do we solve it?</h1>
               <p>This is filler text.</p>
            </div>
            </div>
                    <div className = "bodyImage1" >
                         <img src = "images/logo.png" alt = "first" />
                    </div>

                    <div className = "bodyImage2" >
                         <img src = "images/logo.png" alt = "second" />
                    </div>

                    <div className = "bodyImage3" >
                         <img src = "images/logo.png" alt = "third" />
                    </div>
        
        </>
    )
}

export default AboutUs;