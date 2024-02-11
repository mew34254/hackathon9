import './Resources.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

function Resources(props) {

    return (
        <>
        <NavBar/>
            <div className="resourcesBanner">
                <div className="textContainer">
                        <h1> Welcome to Soemthing </h1>
                        <p> Some description... </p>
                </div>
                <img src= "images/resourcesBanner.jpg" alt="resourcesBanner"/>
            </div>

            <div class="container">

        <div className="cardHeader"> 
        <h2>Header Text</h2>
        </div>
    <div class="resourcesGrid">
        <div class="card">
            <img src="images/resourcesIcon1.jpg" alt="Image 1"/>
            <div class="cardText">
                <h3>Card Title 1</h3>
                <p>Some text description for card 1.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon2.jpg" alt="Image 2"/>
            <div class="cardText">
                <h3>Card Title 2</h3>
                <p>Some text description for card 2.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon3.jpg" alt="Image 3"/>
            <div class="cardText">
                <h3>Card Title 3</h3>
                <p>Some text description for card 3.</p>
            </div>
        </div>
        <div class="card">
            <img src="images/resourcesIcon4.jpg" alt="Image 4"/>
            <div class="cardText">
                <h3>Card Title 4</h3>
                <p>Some text description for card 4.</p>
            </div>
        </div>
    </div>
</div>
<Footer/>
        </>
    )
}

export default Resources;